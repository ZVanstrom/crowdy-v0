import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { timeAgo } from "../pages/fullPost/utils";
import avatar from "../assets/avatar.png";
import Svg from "./Svg";
import Vote from "./Vote";
import { useState } from "react";
import Reply from "./Reply";
import Modal from "./Modal";
import AuthConsumer from "./AuthContext";
import { useRef } from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

Comment.propTypes = {
  children: PropTypes.array,
  comment: PropTypes.object,
  postId: PropTypes.string,
};

const borderColors = [
  "border-yellow-400",
  "border-blue-400",
  "border-purple-400",
  "border-green-400",
  "border-sky-400",
  "border-pink-400",
];

let curColor = 0;

export default function Comment({ children, comment, postId }) {
  const { isAuthenticated, user } = AuthConsumer();
  const listRef = useRef();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModaData] = useState(<></>);
  const [expandChildren, setExpandChildren] = useState(false);
  function onReplyClick() {
    if (isAuthenticated) {
      setShowModal(true);
      setModaData(
        <Reply className="w-5/6 h-5/6" parentComment={comment} isComment={true} setShowModal={setShowModal} />
      );
    } else {
      alert("You must be logged in to reply.");
    }
  }
  function onEdit(value) {
    if (isAuthenticated) {
      if (value === "edit") {
        setShowModal(true);
        setModaData(
          <Reply
            className="w-5/6 h-5/6"
            parentComment={comment}
            isComment={true}
            edit={true}
            setShowModal={setShowModal}
          />
        );
      } else if (value === "delete") {
        if (window.confirm("Are you sure you want to delete this comment?")) {
          axios.delete(`/api/comments/${comment.comment_info.id}`).then(() => {
            queryClient.invalidateQueries({ queryKey: ["post/comment", postId] });
          });
        }
      }
    } else {
      alert("You must be logged in to reply.");
    }
    listRef.current.value = "more";
  }
  function colorSquence() {
    if (curColor == borderColors.length) {
      curColor = 0;
    }
    return borderColors[curColor++];
  }
  const timePassed = timeAgo(new Date(comment.comment_info.created_at));
  return (
    <div className="py-3 pl-2 space-y-2 w-full bg-white rounded-xl md:text-base">
      <div className="flex items-center space-x-2 text-sm font-medium">
        <img src={comment.user_info.user_avatar || avatar} alt="" className="w-5 h-5 rounded-full" />
        <Link to={`/u/${comment.user_info.user_name}`}>{comment.user_info.user_name}</Link>
        <p>{timePassed}</p>
      </div>
      <p className="mr-2 ml-1">{comment.comment_info.content}</p>
      <div className="flex justify-around items-center md:justify-between md:mx-10">
        <select
          ref={listRef}
          name="more-options"
          id="more-options"
          className="px-4 bg-white"
          onChange={(e) => onEdit(e.target.value)}>
          <option value="more" selected>
            More
          </option>
          <option value="share">Share</option>
          {isAuthenticated && user.username === comment.user_info.user_name && <option value="edit">edit</option>}
          {isAuthenticated &&
            (user.username === comment.user_info.user_name ||
              user.mod_in.includes(postId) ||
              user.roles.includes("admin")) && <option value="delete">delete</option>}
        </select>
        <div
          className={`${!children.length && "invisible"} flex items-center space-x-1`}
          onClick={() => setExpandChildren(!expandChildren)}>
          <Svg type="down-arrow" className={`w-4 h-4 ${expandChildren && "rotate-180"}`} />
          <p className="text-sm cursor-pointer md:text-base">{expandChildren ? "Hide" : "Show"}</p>
        </div>
        <div className="flex items-center space-x-1" onClick={() => onReplyClick()}>
          <Svg type="comment" className="w-4 h-4" />
          <p className="text-sm cursor-pointer md:text-base">Reply</p>
        </div>
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <Vote
            {...{
              url: "/api/reactions/comment",
              intitalVote: comment.current_user?.has_upvoted,
              initialCount: comment.comment_info.comment_karma,
              contentID: comment.comment_info.id,
              type: "mobile",
            }}
          />
        </div>
      </div>
      {expandChildren && (
        <ul className={`space-y-2 ${children.length > 0 && expandChildren && "border-l-2 " + colorSquence()}`}>
          {children.map((child) => (
            <Comment key={child.comment.comment_info.id} {...child} />
          ))}
        </ul>
      )}
      {showModal && isAuthenticated && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {modalData}
        </Modal>
      )}
    </div>
  );
}

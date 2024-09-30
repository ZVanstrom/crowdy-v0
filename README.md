# Crowdy - A Dynamic Contest Platform

**Crowdy** is a full-stack web application designed to facilitate user-generated contests. Built with a powerful backend using **Flask** and **PostgreSQL**, and a responsive frontend leveraging **React.js**, Crowdy enables participants to create contests, submit entries, vote on content, and receive payouts. The platform is designed to scale, offering a seamless and engaging user experience.

## Contents

- Introduction
- Technologies
  - Backend
  - Frontend
  - Database
- Core Features
  - User Management
  - Contest Creation
  - Contest Participation & Voting
  - Content Moderation & Reporting
  - Payouts
- Project Setup Instructions
  - Database Setup
  - Backend Setup
  - Running the Application
  - Accessing the Application
- Deployment and Hosting
- Contributing
- License

## Introduction

Crowdy is a web-based platform that allows users to host and participate in creative contests. With a focus on community-driven content, Crowdy enables users to create challenges, vote on submissions, and receive rewards through a secure and transparent system.

This project showcases a scalable architecture using **Flask** and **PostgreSQL** for the backend and **React.js** for the frontend. The system is designed with flexibility in mind, offering a broad set of features that can be expanded upon as the platform grows.

## Technologies

### Backend

Crowdy is powered by **Flask**, a lightweight and flexible web framework in **Python**. The backend handles all core functionalities, including user management, contest operations, and voting mechanisms. Some key backend components include:

- **Flask-Login** for authentication.
- **Flask-SQLAlchemy** for ORM (Object-Relational Mapping).
- **Flask-Marshmallow** for data serialization and validation.
- **Bcrypt** for password security.
- **PostgreSQL** as the relational database system.

### Frontend

The frontend of Crowdy is built using **React.js** to deliver a dynamic and responsive user interface. Key frontend libraries include:

- **Axios** for API requests.
- **React Query** for server-side state management.
- **React Router Dom** for seamless navigation between pages.
- **Framer Motion** for smooth animations.
- **PropTypes** for component validation.

### Database

Crowdy uses **PostgreSQL**, an open-source, robust relational database system, to manage all data, including user accounts, contests, submissions, votes, and payouts. The database schema is structured to optimize performance, particularly for high-traffic voting systems.

## Core Features

### User Management

- **User Registration & Login**: Secure user authentication using email and password.
- **Profile Editing**: Users can update their personal details and preferences.
- **Account Deletion**: Users have control over their accounts with a simple deletion process.
- **Email Verification**: Ensures users provide valid emails before participating in contests.

### Contest Creation

- **Create Contests**: Users can set up new contests, define rules, and invite participation.
- **Edit Contests**: Contest owners have full control over contest details, including deadlines and rewards.

### Contest Participation & Voting

- **Submit Entries**: Users can submit their work (e.g., media, text) to open contests.
- **Vote on Entries**: Registered users can vote on contest submissions using predefined criteria (Top, Trending, Recent).
- **Real-Time Voting Updates**: Users see live updates on votes for each entry.

### Content Moderation & Reporting

- **Report Inappropriate Content**: Users can flag contest entries for review by moderators.
- **Automated Moderation**: Basic automated checks for inappropriate content using pre-defined filters.
- **User Activity Limits**: Prevents spam by restricting user actions per contest.

### Payouts

- **Automated Payouts**: Winners of contests receive their rewards automatically through integrated payment gateways.
- **Prize Pools**: Contest organizers can define the reward structure, with options for tiered payouts.

## Project Setup Instructions

### Database Setup

1. Ensure **PostgreSQL** is installed on your system.
2. Create a PostgreSQL database with the name of your choice.
3. Store your database credentials (username, password, etc.) for configuring the backend.

### Backend Setup

1. Navigate to the project's `backend` folder.
2. Create a `.env` file and add the following environment variables:
   ```
   DATABASE_URI=your_postgresql_database_uri
   SECRET_KEY=your_flask_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
3. Install the required packages using:
   ```
   pip install -r requirements.txt
   ```
4. Run the application:
   ```
   python run.py
   ```

### Running the Application

1. After setting up the database and backend, navigate to the frontend directory.
2. Install frontend dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

### Accessing the Application

Once the application is running, open your web browser and navigate to `localhost:3000` to access the platform locally.

## Deployment and Hosting

Crowdy can be deployed on various cloud platforms, including **Heroku** or **AWS**. Instructions for deploying on these platforms will be provided in future updates. Currently, the app is set up for deployment using **Render.com**, which provides easy scalability for small projects.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push the branch to your fork.
5. Create a pull request.

## License

Crowdy is open source under the **MIT License**. You are free to use, modify, and distribute this project as per the terms of the license.

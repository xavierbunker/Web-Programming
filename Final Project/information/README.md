# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Professional Introduction Webpage

This project is a professional introduction webpage built with React, Tailwind CSS, and a Node.js/Express backend with MongoDB for data storage. It showcases projects, educational background, skills, and contact information.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This webpage serves as a personal portfolio to introduce Xavier Bunker, highlighting his skills, projects, and background. It provides a way for visitors to learn more about him and get in touch.

## Features

- **Home/Introduction:** Displays a professional summary and social media links (GitHub, LinkedIn).
- **Projects/Portfolio:** Showcases key projects with titles, descriptions, technologies, and links. Data is fetched from MongoDB.
- **Education:** Lists academic qualifications and achievements, retrieved from MongoDB.
- **Skills & Technologies:** Highlights relevant skills, fetched from MongoDB.
- **Contact:** Provides contact information (email, LinkedIn, GitHub) and a contact form that stores submissions in MongoDB.
- **Responsive Design:** Utilizes Tailwind CSS for a clean and responsive layout across different devices.
- **Dynamic Content:** Project, education, and skill data are dynamically loaded from a MongoDB database via a backend API.

## Technologies Used

**Frontend:**

- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid styling.
- [React Router DOM](https://reactrouter.com/) - For handling navigation between different pages.
- [Axios](https://axios-http.com/docs/intro) - HTTP client for making API requests to the backend.

**Backend:**

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment.
- [Express](https://expressjs.com/) - Minimalist Node.js web application framework.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing application data.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool for Node.js.
- [cors](https://www.npmjs.com/package/cors) - Middleware to enable Cross-Origin Resource Sharing.
- [dotenv](https://www.npmjs.com/package/dotenv) - For loading environment variables from a `.env` file.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually installed with Node.js) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (installed locally or access to a MongoDB Atlas cluster)

### Frontend Setup

1.  **Navigate to the project directory:**

    ```bash
    cd information
    ```

2.  **Install frontend dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Backend Setup

1.  **Navigate to the `backend` directory:**

    ```bash
    cd backend
    ```

2.  **Install backend dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create a `.env` file** in the `backend` directory and configure your MongoDB connection URI and port:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

    Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.

## Database Setup

1.  **Set up MongoDB:**
    - **Local Installation:** Ensure your local MongoDB server is running.
    - **MongoDB Atlas:** Create a free cluster on [https://www.mongodb.com/atlas/](https://www.mongodb.com/atlas/), set up network access, create a database user, and obtain your connection string.
2.  **Create Collections:** Ensure you have the following collections in your MongoDB database with the relevant data:
    - `projects`
    - `education`
    - `skills`
    - `contactSubmissions`
3.  **Populate Data:** Add your project, education, and skill data as JSON documents into their respective collections. The contact form submissions will be automatically added to the `contactSubmissions` collection when users submit the form.

## Running the Application

1.  **Start the backend server:**

    ```bash
    cd backend
    node server.js
    ```

2.  **Start the frontend development server (in a new terminal window):**

    ```bash
    cd .. # Navigate back to the project root
    npm run dev
    # or
    yarn dev
    ```

3.  **Open your browser** and navigate to `http://localhost:5173` (or the port specified by Vite in the terminal).

## Project Structure
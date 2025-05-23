# Simple Blog Application

This application allows users to create, read, update, and delete blog posts. It uses React for the frontend and Node.js with Express for the backend, with MongoDB as the database.

## Setup Instructions

**Prerequisites:**

* Node.js and npm (Node Package Manager)
* MongoDB

**1.  Backend Setup**

    * Navigate to the `server` directory:

        ```bash
        cd server
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Start MongoDB: Ensure your MongoDB server is running.

    * Run the server:

        ```bash
        node server.js
        ```

**2.  Frontend Setup**

    * Navigate to the main project directory:

        ```bash
        cd ..  # Or the appropriate path to your frontend
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Run the frontend:

        ```bash
        npm start
        ```

    * The application should open in your browser at `http://localhost:3000`.

##  Key Functionality

* **Create Posts:** Use the form on the main page to create new blog posts.
* **View Posts:** All posts are displayed on the main page.
* **Edit Posts:** Click the "Edit" button next to a post to update its title and content.
* **Delete Posts:** Click the "Delete" button to remove a post.

##  Additional Information

* **Server Port:** The backend server runs on port 5000.
* **Database:** The application uses MongoDB to store blog posts.
* **API Endpoints:**
    * `GET /posts`:  Fetch all posts.
    * `POST /posts`:  Create a new post.
    * `PUT /posts/:id`:  Update a post.
    * `DELETE /posts/:id`:  Delete a post.

##  Create React App Information

_(The following section is adapted from the original Create React App README)_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

###  `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###  `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###  `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###  `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

##  Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# Book Review - A React App Adventure
###### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

The Book Review App is a React-based web application designed to provide users with insightful reviews on a wide array on content areas, enhancing their reading experience and aiding in the discovery of new literature.

### Getting Started

#### Prerequisites
Before you begin, ensure you have [Node.js](Nodejs.org) installed on your system.


### Setting up and Running Locally

1. Clone the repository to your machine: 
```bash
git clone https://github.com/ChristianToro/W5D2---React-App.git
```
2. Navigate to the project directory:
```bash
cd React-Project
```
3. Install the necessary dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```

## Project Structure and Organization

 - `public/`: Contains the HTML file and public assets.
 - `src/`:
    - `components/`: Contains all React components used in the application, such as Navbar.js, Review.js, and Home.js.
    - `assets/`: Stores static assets like images used in the reviews.
    - `App.js`: The main React component that includes routing and layout.
    - `index.js`: The entry point for the React application.
    - `reviewsData.js`: A data file containing the reviews displayed in the application.
    - `App.css`: Contains global styles for the application.
- `package.json`: contains project dependencies

## Key Components
- Navbar: Provides navigation links, allowing users to easilt switch between different views of the app
- Review: A component that displays individual book reviews, including book title, author, review text, and an image.
- Home: Servers as the landing page, introducing the purpose and features of the application.

### External Libraries and Dependencies
- [React Router](https://reactorrouter.com/en/main): Utilized for handling routing within the application.


### Additional Information
This project is designed ith expandability in mind, allowing for the addition of more reviews, incorporation of user-generated content, implementation of a database, and further development of the UI/UX. 


# Supplementary Information, Courtesy of Create-React-App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

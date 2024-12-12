# Forest Fire Simulation Application

## Overview

This application simulates forest fires using a backend built with Spring Boot and a frontend built with React. The backend handles the simulation logic and provides REST endpoints, while the frontend displays the simulation grid and allows user interaction.

## Application Installation

### Prerequisites

- Java 11 or higher
- Node.js and npm
- Maven

### Steps local developement running
1. Clone the repository:
   ```sh
   git clone https://github.com/SauretCyril/myForestSpringFire.git
2. Build backend
   - Navigate to the backend directory: cd myForestSpringFire
   - Build the backend using Maven:
     ```sh
     mvn clean install
   ```
3.Build frontend
   - Navigate to the frontend directory: cd myForestSpringFire/frontend
   - Install dependencies:
     ```sh
     npm install
     ```
## Running the Application in local mode

### Backend

1. Navigate to the project root directory.
2. Use the Maven Wrapper to start the backend:
   ```sh
   ./mvnw spring-boot:run
   ```

3. Navigate to the frontend directory
    ```sh
    cd my-app
    npm start
    ```

## Architecture

### Backend (Spring Boot)

- **Main Files:**
  - `DemoApplication.java`: Entry point of the Spring Boot application.
  - `SimulationController.java`: REST controller for handling simulation endpoints.
  - `ForestFireSimulation.java`: Class for the forest fire simulation logic.
  - `SimulationConfig.java`: Configuration class for the simulation.
  - `SwaggerConfig.java`: Configuration for Swagger/OpenAPI.

- **Configuration:**
  - `application.properties`: Configuration for the Spring Boot application.
  - `config.json`: Configuration file for the simulation.

- **Tests:**
  - `DemoApplicationTests.java`: Test class to verify the Spring context loading.

### Frontend (React)

- **Main Files:**
  - `App.tsx`: Main component of the React application.
  - `index.tsx`: Entry point of the React application.
  - `App.css`: CSS styles for the application.

- **Configuration:**
  - `package.json`: Dependencies and scripts for the React project.
  - `tsconfig.json`: TypeScript configuration for the React project.

- **Public:**
  - `index.html`: Main HTML file for the React frontend.
  - `manifest.json`: Web application manifest file.

## Features

### Backend

- **REST Endpoints:**
  - `GET /api/simulation/init`: Initializes the forest fire simulation.
  - `POST /api/simulation/step`: Advances the simulation by one step.

- **Simulation Logic:**
  - The `ForestFireSimulation` class handles the logic for simulating forest fires.

### Frontend

- **Grid Display:**
  - The `App.tsx` component displays the simulation grid and provides buttons for controlling the simulation ("Step" and "Reset").

- **API Calls:**
  - Uses axios to communicate with the Spring Boot backend.

## Dependencies

### Backend

- Spring Boot (Web, Test)
- H2 Database
- Jackson (for JSON serialization/deserialization)
- Springdoc OpenAPI (Swagger)

### Frontend

- React
- Axios (for API calls)
- TypeScript


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

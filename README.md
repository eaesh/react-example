## React Example

Simple ReactJS Application hosted via AWS S3 at [http://react-example-bucket.s3-website-us-east-1.amazonaws.com/](http://react-example-bucket.s3-website-us-east-1.amazonaws.com/)

## Getting Started

[Place Holder]


## Local Development

### `npm install`

Installs all required dependencies to run the app

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Hosting 

Follow these instructions to host the application on AWS

### `cd react-example`

Navigate to application root directory

### `npm run build`

Builds the app and stores into ***/build*** directory

### `aws s3 cp build s3://react-example-bucket --recursive`

Uploads build directly to s3 bucket using AWS CLI


## Project Creation

Process by which to create a brand new react application and install all necessary dependencies

### `npx create-react-app my-app --typescript`

Creates react app my-app with typescript

### npm install @material-ui/core @types/material-ui

Installs [Material-UI Framework](https://material-ui.com/)

### npm install redux

Installs [Redux](https://redux.js.org/)


## Built With

### React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### TypeScript

[https://create-react-app.dev/docs/adding-typescript](https://create-react-app.dev/docs/adding-typescript)
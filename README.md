# Attendance System

This is a simple Attendance System project designed as part of a Software Engineer Internship selection process. The project demonstrates a basic authentication system with a login page and a home page, built using **React** for the frontend and **Node.js** for the backend. This project focuses on managing session authentication with **JWT** and enhances user experience with modern UI elements.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Installation and Setup](#installation-and-setup)
3. [Usage Instructions](#usage-instructions)
4. [Client-Server Interaction](#client-server-interaction)
5. [Project Screenshots](#project-screenshots)

---

## 1. Project Structure

attendance-system/ 
                   ├── client/ # Frontend React application 
                   ├── server/ # Backend Node.js server with REST API 
                   └── docs/ # Screenshots and documentation for reference


- **client**: Contains the frontend React application files.
- **server**: Contains the backend server code (Node.js) with REST API endpoints.
- **docs**: Includes screenshots and documentation files.

---

## 2. Installation and Setup

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prabathush/attendance-system.git
   cd attendance-system

2. **Install dependencies:**

For the backend (server):
cd server
npm install

For the frontend (client):
cd ../client
npm install

3. **Run the server:**
Go to the server folder:
cd ../server
Start the server:
node server.js
The server will be running on http://localhost:5000.

4. **Run the client:**
Go to the client folder:
cd ../client
Start the client:
npm start
The client will be running on http://localhost:3000.

## 3. Usage Instructions

Login Credentials for Testing
    Username: admin
    Password: 123

Basic Usage
- Open the application in your browser by navigating to http://localhost:3000.
- Use the provided credentials to log in.
- Upon successful login, you will be redirected to the home page with a personalized welcome message.
- To log out, click the Logout button. A confirmation modal will appear for security.

## 4. Client-Server Interaction
The project includes the following features to handle client-server interaction:

- Login Validation: Checks the username and password with the backend.

- JWT Authentication: If the credentials are valid, a JWT token is generated and stored in localStorage.

- Access Control:
    If the user is not logged in, they cannot access the home page directly.
    The application will redirect unauthorized users to the login page.
    If already logged in, the user is redirected to the home page on attempting to access the login page.


## 5. Project Screenshots
Screenshots are located in the docs folder. Below is a quick reference for each screenshot:

Login Page (Default View)

    Filename: Login_Page_Default_View.png
    Description: Shows the login screen with fields for username and password, styled with icons.

Login Page (Invalid Credentials)

    Filename: Login_Page_Invalid_Credentials.png
    Description: Shows the error message when incorrect credentials are entered.

Home Page (Welcome Message)

    Filename: Home_Page_Welcome_Message.png
    Description: Shows a personalized welcome message and a logout button.

Logout Confirmation Modal

    Filename: Logout_Confirmation.png
    Description: Displays a modal asking the user to confirm before logging out.



# Project Documentation for Attendance System

---

### 1. Project Structure and Initialization

#### Project Folder
- Created a root folder named `attendance-system`.

#### Subfolders
- **client**: Contains the frontend React application files.
- **server**: Contains the backend server code (Node.js) with REST API endpoints.
- **docs**: Includes screenshots and documentation to illustrate key functionalities.

---

### 2. Server Code Initialization

#### Backend Framework
- **Node.js** with `express` as the server framework.

#### Login REST API
- **Endpoint**: `POST /login`
- **Authentication**: Uses hardcoded user credentials (`username: 'admin'`, `password: '123'`) with password hashing using `bcrypt`.
- **JWT**: On successful login, the server responds with a **JWT (JSON Web Token)** for client-side storage to manage session authentication.

---

### 3. Client Pages

#### Login Page
- **Form**: Contains fields for username and password with icons for visual clarity.
- **Validation**: Displays an error message if credentials are invalid.
- **Login Button**: Submits the form to the backend to retrieve a JWT token.

#### Home Page
- **Welcome Message**: Displays a personalized greeting using the logged-in username.
- **Logout Button**: Provides an option to log out by removing the JWT token and redirecting back to the login page.
- **Logout Confirmation Modal**: Prompts the user to confirm their intention before logging out, enhancing user experience.

---

### 4. Client-Server Interaction and Behavior

#### Login Validation
- **Credentials Check**: Validates the username and password with the backend.
- **Success Handling**: Stores the JWT token in `localStorage` and redirects to the home page upon successful login.
- **Error Handling**: Displays an error message for invalid credentials.

#### Redirects
- **To Login Page**: If a user tries to access the home page directly without a token, they are redirected to the login page.
- **To Home Page**: If a logged-in user attempts to go to the login page, they are automatically redirected to the home page.

---

### 5. README.md

Created a detailed `README.md` file with the following sections:
- **Project Overview**: Brief summary of the project’s purpose and functionality.
- **Installation Instructions**: Detailed steps to set up and run the project, including dependencies (`axios`, `jsonwebtoken`, `bcrypt`, etc.).
- **Usage Instructions**: Provides testing credentials (username: 'admin', password: '123').
- **Folder Structure**: Describes the project’s folder layout (client, server, docs).
- **Additional Notes**: Highlights any optional features or configurations.

---

### 6. Screenshots in the "docs" Folder

The following screenshots have been added to the `docs` folder, each labeled with a task number for easy reference.

---

#### Screenshot Descriptions

---

##### 1. Login Page (Default View)
- **Filename**: `Login_Page_Default_View.png`
- **Description**: Shows the initial login screen with fields for username and password, including icons for a professional look. The "Login" button is styled to enhance user experience.

---

##### 2. Login Page (Invalid Credentials)
- **Filename**: `Login_Page_Invalid_Credentials.png`
- **Description**: Demonstrates the error message displayed when incorrect credentials are provided. The message "Invalid credentials. Please try again." appears in red below the login form, guiding the user to try again.

---

##### 3. Home Page (Welcome Message)
- **Filename**: `Home_Page_Welcome_Message.png`
- **Description**: Shows the home page after a successful login with a personalized welcome message ("Welcome back, admin!") and a logout button. The layout is card-based, with a modern design and a clear "Logout" button.

---

##### 4. Logout Confirmation Modal
- **Filename**: `Logout_Confirmation.png`
- **Description**: Captures the logout confirmation modal that appears when the "Logout" button is clicked. The modal prompts the user with "Are you sure you want to log out?" and offers "Yes" and "No" buttons to confirm or cancel the action.

---


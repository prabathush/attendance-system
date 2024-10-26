import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing icons

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.token) {
        // Store token in localStorage
        localStorage.setItem('token', `Bearer ${response.data.token}`);
        // Redirect to home page
        navigate('/home');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back!</h1>
        <form onSubmit={handleLogin} className="login-form">
          {/* Username input with icon */}
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="input-field"
            />
          </div>
          {/* Password input with icon and toggle visibility */}
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="input-field"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="toggle-password-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;

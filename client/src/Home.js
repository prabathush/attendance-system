import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Updated CSS file for the new design
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [message, setMessage] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Logout confirmation modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:5000/home', {
          headers: {
            Authorization: token,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [navigate]);

  const logout = () => {
    setShowLogoutModal(true); // Show the confirmation modal before logging out
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="home-content">
      <div className="dashboard-card">
        <FontAwesomeIcon icon={faCheckCircle} size="3x" className="check-icon" />
        <h1>Welcome back, {message ? message : 'User'}!</h1>
        <p className="success-msg">You have successfully logged into your dashboard.</p>
        
        <button className="logout-btn" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>

      {/* Logout confirmation modal */}
      {showLogoutModal && (
        <div className="modal">
          <div className="modal-content bounce">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <button className="confirm-btn" onClick={confirmLogout}>Yes</button>
            <button className="cancel-btn" onClick={cancelLogout}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

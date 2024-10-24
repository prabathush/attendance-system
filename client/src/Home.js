import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [message, setMessage] = useState('');
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
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>{message ? message : 'Loading...'}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;

import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error logging in', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

export { login, logout };

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Protected = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/protected', {
          headers: { Authorization: token }
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Failed to fetch protected data: ' + error);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>
      <h2>Protected</h2>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Protected;
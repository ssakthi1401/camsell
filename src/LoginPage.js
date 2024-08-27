import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './log.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (username === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }

    // Example login logic; replace with actual authentication
    if (username === 'admin' && password === 'password') {
      setError('');
      navigate('/admin-dashboard'); // Navigate to the admin dashboard
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

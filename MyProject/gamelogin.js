import React, { useState } from 'react';
import './gamelogin.css';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-content'>
    <div className="login">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <br></br>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div><br></br>
        <button type="submit">Login</button>
      </form>
    </div></div>
    </div>
  );
};

export default Login;

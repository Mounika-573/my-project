import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './gamelogin';
import Game from './Game';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/game" /> : <Login onLogin={handleLogin} />} />
          <Route path="/game" element={isLoggedIn ? <Game /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

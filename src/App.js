import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

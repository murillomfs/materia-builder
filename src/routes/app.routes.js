import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:slug/:id" element={<Profile />} />
        </Routes>
    );
}

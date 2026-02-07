'use client';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './app/page';
import LoginPage from './app/login/page';
import DashboardPage from './app/dashboard/page';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;

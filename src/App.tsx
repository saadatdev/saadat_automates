import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home'; 
import TechStackPage from './components/techstack'; // Create this new page (see below)
import ProfilePage from './components/profile';
import PortfolioPage from './components/portfoliopage';
import ProjectDetail from './components/projectdetail';
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/about-me" element={<ProfilePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown routes to home */}
      </Routes>
    </div>
  );
};

export default App;
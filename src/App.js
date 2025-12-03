import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || 'home';

  const setCurrentPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      {/* Fullscreen Toggle */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700 z-50">
        <span className="text-xl">⛶</span>
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

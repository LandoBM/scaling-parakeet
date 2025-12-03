import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import MatrixRain from '../components/MatrixRain';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-black">
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Landon Murray
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Web Developer
          </p>
          
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => navigate('/resume')}
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all"
            >
              Resume
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all"
            >
              Portfolio
            </button>
          </div>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
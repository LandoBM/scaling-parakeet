import React from 'react';

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" 
        style={{ top: '10%', left: '10%', animationDelay: '0s' }} 
      />
      <div className="absolute w-80 h-80 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" 
        style={{ top: '50%', right: '20%', animationDelay: '2s' }} 
      />
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" 
        style={{ bottom: '10%', left: '30%', animationDelay: '4s' }} 
      />
      <div className="absolute w-96 h-96 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" 
        style={{ top: '30%', right: '10%', animationDelay: '1s' }} 
      />
    </div>
  );
}

export default AnimatedBackground;
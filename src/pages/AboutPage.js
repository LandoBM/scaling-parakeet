import React from 'react';
import profilePic from '../images/Facetune_10-10-2024-19-37-28.jpg'

function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        {/* Large profile image on the right side - INCREASED SIZE */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2/3 h-[800px]">
          <img 
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover object-center opacity-60"
            style={{
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* Content on the left with text overlay */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-6xl font-bold mb-4">ABOUT</h2>
          <p className="text-cyan-400 mb-8 text-sm">landon.sw.developer@gmail.com</p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-0">
            I graduated from Georgia Gwinnett College with a bachelor’s degree in finance, 
            and somewhere in my last semester I realized I was more drawn to building things with code than running 
            financial models. Instead of starting over, I followed that spark and enrolled in the full-stack bootcamp at 
            Georgia Institute of Technology. It was intense, but it leveled up my skills and gave me the foundation I needed to 
            transition into tech.<br />
            <br />
           
           After graduating, I spent a lot of time creating projects, experimenting, and sharpening my abilities. That eventually grew into 
           taking on real clients and developing websites for their businesses, which led me to start MUX Web Studio which is my own space to bring ideas to life through clean design, 
           thoughtful user experience, and reliable development.
            <br />
            <br />
            When I’m not working on client projects, you’ll probably find me in the gym, filming lifestyle content, 
            or building something new for my personal brand. 
            I’m always learning, always creating, and always pushing myself to grow.
          </p>
          <br />
          {/* Location at bottom left */}
          <div className="absolute bottom-0 left-0 text-gray-400 text-xs">
            <p>Atlanta, Georgia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
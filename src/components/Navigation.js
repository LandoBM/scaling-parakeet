import React from 'react';
import { Phone } from 'lucide-react';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-8">
          {['Home', 'About', 'Resume', 'Portfolio'].map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.toLowerCase()
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          {/* <Phone className="w-4 h-4" /> */}
          <span>Landon Murray</span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
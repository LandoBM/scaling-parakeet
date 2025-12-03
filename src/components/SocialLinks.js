import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Facebook } from 'lucide-react';

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/landonbmurray/" className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://github.com/LandoBM" className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Github className="w-5 h-5" />
      </a>
      {/* <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Twitter className="w-5 h-5" />
      </a> */}
      <a href="https://www.instagram.com/midnight.landun?igsh=aWdkYjlxaW13dmhy&utm_source=qr" className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Instagram className="w-5 h-5" />
      </a>
      {/* <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Facebook className="w-5 h-5" />
      </a> */}
    </div>
  );
}

export default SocialLinks;
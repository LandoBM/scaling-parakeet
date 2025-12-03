import React from 'react';
import ProjectCard from '../components/ProjectCard';

function PortfolioPage() {
  const projects = [
    { title: 'E-Commerce Platform', tech: 'React, Node.js, MongoDB' },
    { title: 'Portfolio Website', tech: 'React, Tailwind CSS' },
    { title: 'Task Management App', tech: 'React, Firebase' },
    { title: 'Real Estate Platform', tech: 'React, Express, PostgreSQL' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">PORTFOLIO</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
import React from 'react';

function ProjectCard({ project, index }) {
  return (
    <div className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-${1460925895917 + index * 1000}-015c4ab4c4f8?w=800&h=600&fit=crop)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-cyan-400">{project.tech}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-black font-bold">→</span>
      </div>
    </div>
  );
}

export default ProjectCard;

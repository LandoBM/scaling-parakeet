import React from 'react';

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-cyan-400 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;

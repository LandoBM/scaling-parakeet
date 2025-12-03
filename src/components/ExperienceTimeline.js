import React, { useState } from 'react';

function ExperienceTimeline({ experiences }) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <ExperienceItem key={idx} exp={exp} />
      ))}
    </div>
  );
}

function ExperienceItem({ exp }) {
  const [open, setOpen] = useState(false);

  const hasSubItems = exp.subItems && exp.subItems.length > 0;

  return (
    <div className="relative pl-8 border-l-2 border-gray-700">
      {/* Timeline Dot */}
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400" />

      {/* Year */}
      <div className="bg-cyan-400/10 px-3 py-1 rounded text-xs text-cyan-400 inline-block mb-2">
        {exp.year}
      </div>

      {/* Clickable Header When There Are SubItems */}
      <div
        className={`flex items-start justify-between cursor-pointer ${
          hasSubItems ? 'pr-6' : ''
        }`}
        onClick={() => hasSubItems && setOpen(!open)}
      >
        <div>
          <h4 className="font-bold mb-1">{exp.company}</h4>
          <p className="text-sm text-cyan-400 mb-2">{exp.role}</p>
        </div>

        {/* Dropdown Arrow */}
        {hasSubItems && (
          <span
            className={`text-cyan-400 transform transition-transform duration-300 mt-1 ${
              open ? 'rotate-90' : 'rotate-0'
            }`}
          >
            ▶
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400">{exp.description}</p>

      {/* Collapsible SubItems */}
      {hasSubItems && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4">
            {exp.subItems.map((item, i) => (
              <div
                key={i}
                className="pl-6 border-l border-gray-700 text-gray-400"
              >
                <p className="font-semibold text-gray-300 text-sm">
                  • {item.title}
                </p>
                <p className="text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceTimeline;


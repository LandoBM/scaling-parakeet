import React from 'react';
import SkillBar from '../components/SkillBar';
import ExperienceTimeline from '../components/ExperienceTimeline';

function ResumePage() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 85 }
  ];

  
 const experiences = [
  {
    year: '2025–Present',
    company: 'MUX Web Studio',
    role: 'Founder & Lead Developer',
    description:
      'Build responsive, modern websites and applications for small businesses, schools, and emerging brands.',
    subItems: [
      {
        title: 'Lumina Electric Website',
        description:
          'Developed a full electrician company site with service pages, service-area lookup, appointment requests, reviews, and contact flows using React and Tailwind.'
      },
      {
        title: 'Summercrest Academy Website',
        description:
          'Created a multi-page school website including academic programs, staff listings, community pages, and contact sections. Added animations and reusable components.'
      },
      {
        title: 'Summercrest Mobile App',
        description:
          'Built a React Native prototype with an animated mascot, scheduling tools, and collapsible navigation using Expo.'
      }
    ]
  },
  {
    year: '2019–Present',
    company: 'CarMax',
    role: 'Lead Customer Experience Consultant, Transaction Support',
    description:
      'Analyze KPIs, troubleshoot systems, and support cross-functional teams using Salesforce and Power BI.'
  }
];



  const languages = [
    { name: 'English', level: 100 },
  ];

  const hobbies = [
    { icon: '🎮', name: 'Gaming' },
    { icon: '📷', name: 'Photography' },
    { icon: '✈️', name: 'Travel' },
    { icon: '🎨', name: 'Design' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">SOFTWARE SKILLS</h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <SkillBar key={idx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">LANGUAGES</h3>
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <SkillBar key={idx} name={lang.name} level={lang.level} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">PERSONAL SKILLS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Creativity</li>
                <li>• Team Work</li>
                <li>• Organization</li>
                <li>• Problem Solving</li>
                <li>• Communication</li>
              </ul>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">EXPERIENCE</h3>
              <ExperienceTimeline experiences={experiences} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">EDUCATION</h3>
              <div className="relative pl-8 border-l-2 border-gray-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400" />
                <div className="bg-cyan-400/10 px-3 py-1 rounded text-xs text-cyan-400 inline-block mb-2">
                  2018–2022
                </div>
                <h4 className="font-bold mb-1">BS in Finance</h4>
                <p className="text-sm text-gray-400">Georgia Gwinnett College</p>
              </div>
               <div className="relative pl-8 border-l-2 border-gray-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400" />
                <div className="bg-cyan-400/10 px-3 py-1 rounded text-xs text-cyan-400 inline-block mb-2">
                  2022-2023
                </div>
                <h4 className="font-bold mb-1">Certificate in Full Stack Web Development</h4>
                <p className="text-sm text-gray-400">Georgia Institute of Technology</p>
              </div>
              
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">WHAT CAN I DO?</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Logo & Stationery</li>
                <li>• Branding & Newsletter</li>
                <li>• Packaging & Catalog</li>
                <li>• Strategy & Advertisement</li>
                <li>• Web Development</li>
                <li>• UI/UX Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">DESIGN SKILLS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Creativity</li>
                <li>• Planning & Strategy</li>
                <li>• Typography & Layout</li>
                <li>• Grid & Color Sense</li>
                <li>• Inspiration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">HOBBIES & INTERESTS</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-800 flex items-center justify-center text-2xl">
                      {hobby.icon}
                    </div>
                    <p className="text-xs text-gray-400">{hobby.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
import React from 'react';

const skills = [
  { name: 'React', icon: '/icons/React-icon.svg' },
  { name: 'JavaScript', icon: 'icons/JavaScript-logo.png' },
  { name: 'Tailwind CSS', icon: '/icons/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', icon: '/icons/icons8-node-js-48.png' },
  { name: 'Git', icon: '/icons/icons8-git-48.png' },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-darkBackground text-gray-100 py-20 px-6 max-w-6xl mx-auto rounded-lg"
    >
      <h2 className="text-4xl font-bold mb-8 text-indigo-400 text-center">
        About Me
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12 leading-relaxed">
        I'm a passionate frontend developer who loves turning ideas into beautiful and
        functional web applications. I enjoy working with React, Tailwind CSS, and modern
        web technologies to build seamless user experiences.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center w-28 shadow-md hover:shadow-indigo-500 transition"
          >
            <img
              src={icon}
              alt={name}
              className="w-16 h-16 mb-4"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/64?text=No+Icon';
              }}
            />
            <span className="text-gray-200 font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;


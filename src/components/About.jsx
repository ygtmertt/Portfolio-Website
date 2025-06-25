import React from 'react';

const skills = [
  { name: 'React', icon: '/icons/React-icon.svg' },
  { name: 'JavaScript', icon: 'icons/JavaScript-logo.png' },
  { name: 'TailwindCSS', icon: '/icons/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', icon: '/icons/icons8-node-js-48.png' },
  { name: 'Java', icon: '/icons/icons8-java-48.png' },
  { name: 'Git', icon: '/icons/icons8-git-48.png' },
];

const About = () => {
  return (
    <section
      id="about"
      // Section background and main text color adapt to dark/light mode using the new colors
      className="bg-lightBackground dark:bg-darkBackground text-gray-900 dark:text-gray-100 py-20 px-6 max-w-6xl mx-auto rounded-lg"
    >
      <h2 className="text-4xl font-bold mb-8 text-lightPrimary dark:text-darkPrimary text-center">
        About Me
      </h2>
      <p className="max-w-3xl mx-auto text-center text-lightSecondary dark:text-darkSecondary mb-12 leading-relaxed">
        Hi, I’m Yiğit Ömer Mert. While my main focus is backend development with Java, Spring Boot, and databases, I also enjoy working on the frontend using React and Redux. Creating smooth, responsive, and user-friendly interfaces is something I’m passionate about. Combining solid backend architecture with polished frontend experiences allows me to build complete and efficient applications. I’m always eager to learn new technologies and improve my skills to deliver high-quality software.
      </p>
      <br/>
      <br/>
      <h2 className="text-4xl font-bold mb-8 text-lightPrimary dark:text-darkPrimary text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            // Skill card background, text, and hover shadow adapt using the new colors
            className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center w-28 shadow-md hover:shadow-lightPrimary dark:hover:shadow-darkPrimary transition"
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
            <span className="text-gray-900 dark:text-gray-200 font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

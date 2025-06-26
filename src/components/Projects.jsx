import React from 'react';
import { useProjects } from '../context/ProjectsContext';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const { projects } = useProjects();

  return (
    <section
      id="projects"
      // Section background and default text color adapt to the new palette.
      // Using gray-100 for light mode background to subtly distinguish from main app background,
      // and gray-800 for dark mode.
      className="py-20 px-6 bg-darkPrimary dark:bg-lightPrimary text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading uses primary theme colors */}
        <h2 className="text-4xl font-bold text-lightPrimary dark:text-darkPrimary text-center mb-12">
          Projects
        </h2>

        <div className="flex flex-col gap-14">
          {projects.map((project, index) => (
            <div
              key={index}
              // Project card container with alternating layout for image and content.
              // Background, shadow, and hover effect adapt to the new palette.
              className={`bg-lightPrimary dark:bg-darkPrimary rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden
                         hover:shadow-lightPrimary/50 dark:hover:shadow-darkPrimary/50 transition duration-300`}
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.title}
                // Ensure image fills its container, has rounded corners, and a minimum height.
                className="w-full md:w-1/2 h-auto rounded-xl md:rounded-none object-cover shadow-lg"
                style={{minHeight: '250px'}} // Inline style for minimum height to ensure image visibility
              />
              {/* Content Section */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between"> {/* Added flex-col and justify-between for consistent spacing */}
                <div>
                  {/* Project title uses primary theme colors */}
                  <h3 className="text-2xl font-bold text-darkPrimary dark:text-lightPrimary mb-2">
                    {project.title}
                  </h3>
                  {/* Description uses secondary theme colors */}
                  <p className="text-darkSecondary dark:text-lightSecondary text-2xl mb-4">
                    {project.description}
                  </p>

                  {/* Tags section: background and text colors adapt to the new palette */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-darkPrimary dark:bg-lightPrimary text-lightSecondary dark:text-darkSecondary text-base font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links use primary theme colors with accent hover */}
                <div className="flex gap-8 mt-auto"> {/* Added mt-auto to push links to the bottom */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-darkPrimary dark:text-lightPrimary hover:text-accent transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-darkPrimary dark:text-lightPrimary hover:text-accent transition"
                  >
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

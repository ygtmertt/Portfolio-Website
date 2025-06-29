import { useLanguage } from "../context/LanguageContext";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Projects = () => {
  const { data, loading } = useLanguage();
  if (loading) return null;

  const projects = data.projectsSection;

  return (
    <section
  id="projects"
  className="py-20 px-6 bg-darkPrimary dark:bg-lightPrimary text-gray-900 dark:text-gray-100"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-lightPrimary dark:text-darkPrimary text-center mb-12">
      Projects
    </h2>

    <div className="flex flex-col gap-14">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`bg-lightPrimary dark:bg-darkPrimary rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden
                         hover:shadow-lightPrimary/50 dark:hover:shadow-darkPrimary/50 transition duration-300`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/2 h-auto rounded-xl md:rounded-none object-cover shadow-lg"
            style={{ minHeight: '250px' }}
          />
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-darkPrimary dark:text-lightPrimary mb-2">
                {project.title}
              </h3>
              <p className="text-darkSecondary dark:text-lightSecondary text-2xl mb-4">
                {project.description}
              </p>

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

            <div className="flex gap-8 mt-auto">
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

import { FaGithub, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    title: 'TaskTrackerr',
    description:
      'A simple, customizable, minimal setup cookie plugin that allows users to select which cookies to accept or decline. This project showcases frontend development skills with React and Redux.',
    image: '/icons/TaskTracker.jpg', // Assuming these paths are correct relative to your public folder
    tags: ['react', 'javascript', 'vercel', 'frontend'],
    github: 'https://github.com/ygtmertt/Task-Tracker',
    demo: 'https://workintech-demo.vercel.app',
  },
  {
    title: 'Pizza Website',
    description:
      'An online pizza store app i managed to put together with my newfound frontend skills. I used HTML, JavaScript and CSS in order to create this static website.',
    image: '/icons/pizzaWebsite.svg', // Assuming these paths are correct relative to your public folder
    tags: ['html', 'javascript', 'css', 'frontend'],
    github: 'https://github.com/ygtmertt/Pizza-Website',
    demo: 'https://journey-demo.vercel.app',
  },
  {
    title: 'Calculator App',
    description:
      'I programmed a calculator GUI in Java using Swing library. Application includes a functional calculator with buttons and text fields.',
    image: '/icons/calculatotrPic.jpg', // Assuming these paths are correct relative to your public folder
    tags: ['java', 'OOP', 'swing', 'backend'],
    github: 'https://github.com/ygtmertt/Calculator-App',
    demo: 'https://journey-demo.vercel.app',
  },
  // You can add more projects here following the same structure
];

const Projects = () => {
  return (
    <section
      id="projects"
      // Section background and text color now adapt to the new palette.
      // Using gray-100 for light mode background to slightly distinguish from main app background,
      // and gray-800 for dark mode, with rounded corners.
      className="dark:lightPrimary text-gray-900 dark:text-gray-100 py-20 px-6 max-w-6xl mx-auto rounded-lg"
    >
      <h2 className="text-4xl font-bold mb-12 text-lightPrimary dark:text-darkPrimary text-center">
        Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map(({ title, description, image, tags, github, demo }) => (
          <div
            key={title}
            // Project card background, shadow, and layout adapt.
            // Hover effect also uses primary colors.
            className="text-2xl bg-lightPrimary dark:bg-darkPrimary lightPrimary dark:darkPrimary rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden
                       hover:shadow-lightPrimary dark:hover:shadow-darkPrimary transition duration-300"
          >
            {/* Left: Image Section */}
            <div className="md:w-1/2 flex-shrink-0"> {/* flex-shrink-0 to prevent image from shrinking */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover min-h-[200px] md:min-h-[300px]" // Ensure image has a minimum height
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x300/cccccc/333333?text=Project+Preview'; // Updated placeholder
                }}
              />
            </div>

            {/* Right: Content Section */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                {/* Title color adapts to primary theme colors */}
                <h3 className="text-3xl font-bold text-darkPrimary dark:text-lightPrimary mb-4">
                  {title}
                </h3>
                {/* Description text color adapts to secondary theme colors */}
                <p className="text-darkSecondary dark:text-lightSecondary mb-8">{description}</p>

                {/* Tags section: dynamic background and text colors */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-darkPrimary dark:bg-lightPrimary text-gray-900 dark:text-white text-base font-semibold px-4 py-2 rounded-full "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons/links adapt to primary colors with accent hover */}
              <div className="flex gap-6">
                <a
            href="https://www.linkedin.com/in/yiğit-ömer-mert-6ab55b243"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            // Social icons adapt their color using the new palette
            className="text-darkSecondary dark:text-lightSecondary hover:text-darkPrimary dark:hover:text-lightPrimary transition text-3xl"
          >
            <FaGlobe />
          </a>
                <a
                  href="https://github.com/ygtmertt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  // Social icons adapt their color using the new palette
                  className="text-darkSecondary dark:text-lightSecondary hover:text-darkPrimary dark:hover:text-lightPrimary transition text-3xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

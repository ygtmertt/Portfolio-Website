import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      // This section relies on the App.jsx's global background.
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        {/* H1 tags now adapt their color based on dark/light mode using the new palette */}
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-gray-100">
          Hi,
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-gray-100">
          I'm <span className="text-lightPrimary dark:text-darkPrimary">Yiğit Ömer Mert</span>
        </h1>
        {/* Paragraph text also adapts its color using the new palette */}
        <p className="text-lg text-lightSecondary dark:text-darkSecondary max-w-md mx-auto md:mx-0 mb-8">
          I'm a software developer who is passionate about building beautiful and functional web experiences.
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center md:justify-start gap-8">
          <a
            href="https://github.com/ygtmertt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            // Social icons adapt their color using the new palette
            className="text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yiğit-ömer-mert-6ab55b243"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            // Social icons adapt their color using the new palette
            className="text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Profile Photo */}
      <div className="flex-1 mb-10 md:mb-0 flex justify-end">
        <img
          src="./ProfilePic.jpg"
          alt="Profil Fotoğrafı"
          // Border color now adapts using defined primary colors from the new palette
          className="rounded-half w-80 h-80 object-cover shadow-lg border-2 border-lightPrimary dark:border-darkPrimary"
        />
      </div>
    </section>
  );
};

export default Hero;
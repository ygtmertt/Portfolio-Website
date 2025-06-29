import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { data, loading } = useLanguage();
  if (loading) return null;

  const { greeting, intro, ctaHtml } = data.heroSection;

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6"
    >
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-gray-100">
          {greeting}
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-gray-100">
          I'm <span className="text-lightPrimary dark:text-darkPrimary">{intro}</span>
        </h1>
        <div
          className="text-lg text-lightSecondary dark:text-darkSecondary max-w-md mx-auto md:mx-0 mb-8"
          dangerouslySetInnerHTML={{ __html: ctaHtml }}
        />

        <div className="flex justify-center md:justify-start gap-8">
          <a
            href="https://github.com/ygtmertt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yiğit-ömer-mert-6ab55b243"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-lightSecondary dark:text-darkSecondary hover:text-lightPrimary dark:hover:text-darkPrimary transition text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="flex-1 mb-10 md:mb-0 flex justify-end">
        <img
          src="./ProfilePic.jpg"
          alt="Profil Fotoğrafı"
          className="rounded-half w-80 h-80 object-cover shadow-lg border-2 border-lightPrimary dark:border-darkPrimary"
        />
      </div>
    </section>
  );
};

export default Hero;

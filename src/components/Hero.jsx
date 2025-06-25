import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6"
    >
      {/* Metin Kısmı */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-white">
          Hi, I'm <span className="text-indigo-500">Yiğit Ömer Mert</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0 mb-8">
          Frontend developer passionate about building beautiful and functional web experiences.
        </p>

        {/* Sosyal Butonlar */}
        <div className="flex justify-center md:justify-start gap-6 text-gray-400">
          <a
            href="https://github.com/ygtmertt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yiğit-ömer-mert-6ab55b243"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 transition text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Profil Fotoğrafı */}
      <div className="flex-1 mb-10 md:mb-0 flex justify-center">
        <img
          src="./ProfilePic.jpg"
          alt="Profil Fotoğrafı"
          className="rounded-half w-80 h-80 object-cover shadow-lg border-4 border-indigo-500"
        />
      </div>
    </section>
  );
};

export default Hero;


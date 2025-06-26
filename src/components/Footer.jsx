import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-lightSecondary py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-darkPrimary mb-4">Send me a message!</h2>
      <p className="text-white dark:text-black mb-2">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <a
        href="mailto:yigitomer.merts@gmail.com"
        className="text-white dark:text-black underline underline-offset-2 hover:text-accent transition mb-6 block"
      >
        yigitomer.merts@gmail.com
      </a>
      <div className="flex justify-center gap-6 mt-6 text-darkPrimary text-2xl">
        <a
          href="https://github.com/ygtmertt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yiğit-ömer-mert-6ab55b243"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

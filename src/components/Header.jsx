import React, { useState } from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  

  return (
    <header className="bg-lightBackground dark:bg-darkBackground text-gray-900 dark:text-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:px-8">
        <div className="text-4xl font-bold cursor-pointer select-none darkPrimary dark:ligthPrimary">
          MyPortfolio
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-lightSecondary dark:text-darkSecondary">
          <a href="#hero" className="font-bold over:text-lightPrimary dark:hover:text-darkPrimary transition">Home</a>
          <a href="#about" className="font-bold hover:text-lightPrimary dark:hover:text-darkPrimary transition">About</a>
          <a href="#profile" className="font-bold hover:text-lightPrimary dark:hover:text-darkPrimary transition">Profile</a>
          <a href="#projects" className="font-bold hover:text-lightPrimary dark:hover:text-darkPrimary transition">Projects</a>
          <a href="#footer" className="font-bold hover:text-lightPrimary dark:hover:text-darkPrimary transition">Contact</a>
        </nav>

        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="hidden md:block p-2 rounded bg-darkPrimary dark:bg-lightPrimary"
        >
          {darkMode ? '  ☀︎  ' : '⏾'}
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded border border-lightSecondary dark:border-darkSecondary hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col space-y-4 py-4 px-6 font-medium">
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="hover:text-lightPrimary dark:hover:text-darkPrimary transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-darkPrimary dark:hover:text-ligthPrimary transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-lightPrimary dark:hover:text-darkPrimary transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-lightPrimary dark:hover:text-darkPrimary transition"
          >
            Contact
          </a>

          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="mt-2 p-2 rounded bg-lightPrimary dark:bg-darkPrimary hover:bg-accent transition"
          >
            {darkMode ? '☀︎ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;

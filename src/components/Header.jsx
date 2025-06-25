import React, { useState } from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="bg-darkBackground text-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer select-none">
          Yiğit Ömer Mert
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-300">
          <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="hidden md:block p-2 rounded bg-darkPrimary hover:bg-accent transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded border border-gray-400 hover:bg-gray-800 transition"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-100"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-gray-100 flex flex-col space-y-4 py-4 px-6 font-medium">
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-400 transition"
          >
            Contact
          </a>

          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="mt-2 p-2 bg-indigo-600 rounded hover:bg-indigo-500 transition"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;

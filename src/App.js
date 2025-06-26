import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // This effect ensures the 'dark' class is present or absent on the root HTML element,
    // which enables Tailwind CSS's dark mode functionality across the app.
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // The main app container's background and default text color dynamically change
    // based on the 'darkMode' state, using the colors defined in tailwind.config.js.
    <div className="min-h-screen bg-lightBackground dark:bg-darkBackground text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
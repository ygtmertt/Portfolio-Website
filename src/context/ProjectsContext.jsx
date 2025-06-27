import React, { createContext, useContext } from 'react';

const projects = [
  {
    title: 'TaskTrackerr',
    description:
      'A simple, customizable, minimal setup cookie plugin that allows users to select which cookies to accept or decline. This project showcases frontend development skills with React and Redux.',
    image: '/icons/TaskTracker.jpg',
    tags: ['react', 'javascript', 'vercel', 'frontend'],
    github: 'https://github.com/ygtmertt/Task-Tracker',
    demo: 'https://workintech-demo.vercel.app',
  },
  {
    title: 'Pizza Website',
    description:
      'An online pizza store app i managed to put together with my newfound frontend skills. I used HTML, JavaScript and CSS in order to create this static website.',
    image: '/icons/pizzaWebsite.svg',
    tags: ['html', 'javascript', 'css', 'frontend'],
    github: 'https://github.com/ygtmertt/Pizza-Website',
    demo: 'https://pizza-website-lio88kow1-ygtmertts-projects.vercel.app/',
  },
  {
    title: 'Calculator App',
    description:
      'I programmed a calculator GUI in Java using Swing library. Application includes a functional calculator with buttons and text fields.',
    image: '/icons/calculatotrPic.jpg',
    tags: ['java', 'OOP', 'swing', 'backend'],
    github: 'https://github.com/ygtmertt/Calculator-App',
    demo: 'https://journey-demo.vercel.app',
  },
];

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);

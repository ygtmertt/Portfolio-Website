import React, { createContext, useContext } from 'react';

const profile = {
  basicInfo: {
    location: 'Istanbul, Turkey',
    languages: 'English (C1), German (A1)',
    hobbies: 'Basketball, Bass Guitar, Reading, Botanics, Swimming, Fitness',
    softSkills: 'Analytic Thinking, Team Player, Motivated, Hardworking',
  },
  education: [
    {
      school: 'Workintech',
      program: 'Fullstack Course',
      date: '2025',
    },
    {
      school: 'Bahçeşehir University',
      program: 'Software Engineering',
      date: '2020-2024',
    },
    {
      school: 'Politechnika Krakowska',
      program: 'Erasmus+ Exchange',
      date: '2023',
    },
    {
      school: 'Florya Tevfik Ercan High School',
      program: 'Highschool',
      date: '2015-2019',
    },
  ],
  experience: [
    {
      company: 'Softtech',
      position: 'Long Term Backend Developer Intern',
      date: 'Apr 2024 - Jul 2024',
    },
    {
      company: 'KPMG',
      position: 'Long Term Cyber Security Intern',
      date: 'Aug 2023 - Jan 2024',
    },
    {
      company: 'Kitoko Lighting',
      position: 'IT Intern',
      date: 'Jul 2021 - Aug 2021',
    },
  ],
};

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

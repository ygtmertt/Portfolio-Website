import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { data, loading } = useLanguage();
  if (loading) return null;

  const { basicInformation, education, experience } = data.profileSection;

  return (
    <section id="profile" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-lightPrimary dark:text-darkPrimary mb-12 text-center">Profile</h2>

      <div className="bg-darkPrimary dark:bg-lightPrimary grid md:grid-cols-3 gap-20 items-start">
        {/* Left Column: Basic Information */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary text-start">Basic Information</h3>
          <ul className="text-black dark:text-white text-xl mb-4">
            <li className="underline underline-offset-4">Location</li>
            <p className="italic text-lg">{basicInformation.location}</p>
            <li className="underline underline-offset-4">Languages</li>
            <p className="italic text-lg">{basicInformation.languages}</p>
            <li className="underline underline-offset-4">Hobbies</li>
            <p className="italic text-lg">{basicInformation.hobbies}</p>
            <li className="underline underline-offset-4">Soft Skills</li>
            <p className="italic text-lg">{basicInformation.softSkills}</p>
          </ul>
        </div>

        {/* Center: Education */}
        <div>
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary text-center mb-4">Education</h3>
          {education.map((edu, i) => (
            <div key={i} className="text-black dark:text-white mb-4">
              <p className="underline underline-offset-4 text-xl text-start">{edu.institution}</p>
              <p className="italic text-lg">{edu.program}<span className="text-base"> {edu.period}</span></p>
            </div>
          ))}
        </div>

        {/* Right Column: Professional Experience */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold mb-4 text-center text-lightPrimary dark:text-darkPrimary">Professional Experience</h3>
          <ul className="text-black dark:text-white text-xl mb-4">
            {experience.map((exp, i) => (
              <li key={i} className="mb-4">
                <p className="underline underline-offset-4">{exp.company}</p>
                <p className="italic text-lg">{exp.title}</p>
                <p className="italic text-base">{exp.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;

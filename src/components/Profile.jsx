import React from 'react';
import { useProfile } from '../context/ProfileContext';

const Profile = () => {
  const { profile } = useProfile();
  const { basicInfo, education, experience } = profile;

  return (
    <section id="profile" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-lightPrimary dark:text-darkPrimary mb-12 text-center">Profile</h2>

      <div className="grid md:grid-cols-3 gap-10 bg-darkPrimary dark:bg-lightPrimary p-10 rounded-xl">
        {/* Basic Information */}
        <div>
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary mb-6">Basic Information</h3>
          <div className="space-y-4 text-black dark:text-white text-lg">
            <div>
              <p className="underline underline-offset-4 font-semibold">Location</p>
              <p className="italic">{basicInfo.location}</p>
            </div>
            <div>
              <p className="underline underline-offset-4 font-semibold">Languages</p>
              <p className="italic">{basicInfo.languages}</p>
            </div>
            <div>
              <p className="underline underline-offset-4 font-semibold">Hobbies</p>
              <p className="italic">{basicInfo.hobbies}</p>
            </div>
            <div>
              <p className="underline underline-offset-4 font-semibold">Soft Skills</p>
              <p className="italic">{basicInfo.softSkills}</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary mb-6 text-center">Education</h3>
          <div className="space-y-6 text-black dark:text-white">
            {education.map((edu, idx) => (
              <div key={idx}>
                <p className="underline underline-offset-4 font-semibold text-xl">{edu.school}</p>
                <p className="italic">{edu.program} <span className="text-base">({edu.date})</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary mb-6 text-center">Professional Experience</h3>
          <div className="space-y-6 text-black dark:text-white">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <p className="underline underline-offset-4 font-semibold text-xl">{exp.company}</p>
                <p className="italic">{exp.position}</p>
                <p className="italic text-base">({exp.date})</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

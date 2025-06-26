import React from 'react';

const Profile = () => {
  return (
    <section
      id="profile"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-lightPrimary dark:text-darkPrimary mb-12 text-center">Profile</h2>

      <div className="bg-darkPrimary dark:bg-lightPrimary grid md:grid-cols-3 gap-10 items-start">
        {/* Left Column: Basic Information */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary text-center underline underline-offset-4 strong">Basic Information</h3>
          <ul className="text-black dark:text-white text-xl mb-4 list-disc">
            <li className='underline underline-offset-4 strong'>Education</li>
            <li className='underline underline-offset-4 strong'>Languages</li>
            <li className='underline underline-offset-4 strong'>Hobbies</li>
          </ul>
        </div>

        {/* Center: Image */}
        <div className="md:col-span-1">
          <img
            src="/profile/profile-image.jpg"
            alt="Profile"
            className="rounded-lg object-cover w-full h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/icons/removedBackground.png';
            }}
          />
        </div>

        {/* Right Column: About Me */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold mb-4 text-center text-lightPrimary dark:text-darkPrimary underline underline-offset-4 strong">Professional Experience</h3>
          <ul className="text-black dark:text-white text-xl mb-4 list-disc">
            <li>
              <p className='underline underline-offset-4 strong'>Softtech</p>
              <p className="italic text-lg">Long Term Backend Developer Intern</p>
              <p className="italic text-base">(Apr 2024 - Jul 2024)</p>
            </li>
            <br></br>
            <li>
              <p className='underline underline-offset-4'>KPMG</p>
              <p className="italic text-lg">Long Term Cyber Security Intern</p>
              <p className="italic text-base">(Aug 2023 - Jan 2024)</p>
            </li>
            <br></br>
            <li>
              <p className='underline underline-offset-4'>Kitoko Lighting</p>
              <p className="italic text-lg">IT Intern</p>
              <p className="italic text-base">(Jul 2021 - Aug 2021)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;

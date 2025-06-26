import React from 'react';

const Profile = () => {
  return (
    <section
      id="profile"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-lightPrimary dark:text-darkPrimary mb-12 text-center">Profile</h2>

      <div className="bg-darkPrimary dark:bg-lightPrimary grid md:grid-cols-3 gap-20 items-start">
        {/* Left Column: Basic Information */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary text-start underline underline-offset-4 strong">Basic Information</h3>
          <ul className="text-black dark:text-white text-xl mb-4">
            <li className='underline underline-offset-4 strong'>Location</li>
            <p className='text-black dark:text-white italic text-lg'>Istanbul, Turkey</p>
            <li className='underline underline-offset-4 strong'>Languages</li>
            <p className='text-black dark:text-white italic text-lg'>English(C1), German(A1)</p>
            <li className='underline underline-offset-4 strong'>Hobbies</li>
            <p className='text-black dark:text-white italic text-lg'>Basketball,  Bass Guitar, Reading, Botanics, Swimming, Fitness</p>
            <li className='underline underline-offset-4 strong'>Soft Skills</li>
            <p className='text-black dark:text-white italic text-lg'>Analytic Thinking, Team Player, Motivated, Hardworking</p>
          </ul>
        </div>

        {/* Center: Image */}
        <div className='bg-darkPrimary dark:bg-lightPrimary'>
          <h3 className="text-2xl font-semibold text-lightPrimary dark:text-darkPrimary text-center underline underline-offset-4 strong mb-4">Education</h3>
          <div className='text-black dark:text-white mb-4'>
            <p className='underline underline-offset-4 strong text-xl text-start'>Workintech</p>
            <p className=' italic text-lg'>Fullstack Course<span className='text-base'>   (2025-2025)</span></p>
          </div>
          <div className='text-black dark:text-white mb-6'>
            <p className='underline underline-offset-4 strong text-xl text-start'>Bahçeşehir University</p>
            <p className=' italic text-lg'>Software Engineering<span className='text-base'>   (2020-2024)</span></p>
          </div>
          <div className='text-black dark:text-white mb-4'>
            <p className='underline underline-offset-4 strong text-xl text-start'>Politechnika Krakowska</p>
            <p className=' italic text-lg'>Erasmus+ Exchange<span className='text-base'>   (2023-2023)</span></p>
          </div>
          <div className='text-black dark:text-white mb-4'>
            <p className='underline underline-offset-4 strong text-xl text-start'>Florya Tevfik Ercan Highschool</p>
            <p className=' italic text-lg'>Highschool<span className='text-base'>   (2015-2019)</span></p>
          </div>
        </div>

        {/* Right Column: About Me */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold mb-4 text-center text-lightPrimary dark:text-darkPrimary underline underline-offset-4 strong">Professional Experience</h3>
          <ul className="text-black dark:text-white text-xl mb-4">
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

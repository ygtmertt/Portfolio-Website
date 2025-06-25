import React from 'react';

const Profile = () => {
  return (
    <section
      id="profile"
      className="bg-darkBackground text-lightSecondary py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-darkPrimary mb-12">Profile</h2>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Column: Basic Information */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-xl font-semibold text-white">Basic Information</h3>
          <div>
            <p className="font-semibold text-lightPrimary">Doğum tarihi</p>
            <p className="text-lightSecondary">24.03.1996</p>
          </div>
          <div>
            <p className="font-semibold text-lightPrimary">İkamet Şehri</p>
            <p className="text-lightSecondary">Ankara</p>
          </div>
          <div>
            <p className="font-semibold text-lightPrimary">Eğitim Durumu</p>
            <p className="text-lightSecondary">
              Hacettepe Üniv. Biyoloji<br />
              Lisans, 2016
            </p>
          </div>
          <div>
            <p className="font-semibold text-lightPrimary">Tercih Ettiği Rol</p>
            <p className="text-lightSecondary">Frontend, UI</p>
          </div>
        </div>

        {/* Center: Image */}
        <div className="md:col-span-1">
          <img
            src="/profile/profile-image.jpg"
            alt="Profile"
            className="rounded-lg object-cover w-full h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x300';
            }}
          />
        </div>

        {/* Right Column: About Me */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
          <p className="text-lightSecondary mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit
            laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-lightSecondary">
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt
            quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

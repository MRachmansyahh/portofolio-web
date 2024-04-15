import React from 'react';

const Credential = () => {
  return (
    <div className="rounded-3xl bg-secondary p-6 space-y-12">
      <div className="flex flex-col justify-center items-center">
        <img
          src="signature.png"
          alt="Button"
          className="w-36 h-36 object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-tertiary uppercase">more about me</p>
          <h2 className="text-2xl text-white">Credentials</h2>
        </div>
        <div className="flex justify-end items-center">
          <a href="/about" class="about-btn">
            <img src="arrow.svg" alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Credential;

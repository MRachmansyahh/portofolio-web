import React from 'react';
import Credential from '../../Components/Info/Credential';
import Talk from '../../Components/Info/Talk';
import Profiles from '../../Components/Info/Profiles';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-6 rounded-3xl bg-secondary p-6 space-y-4 cursor-pointer">
        <div className="flex justify-center items-center gap-6 ">
          <div className="w-1/2">
            <img
              alt="Muhammad Rachmansyah Poetra"
              src="profile.jpg"
              className="rounded-tl-3xl rounded-br-3xl object-cover w-full h-56"
            ></img>
          </div>
          <div className="w-1/2">
            <h4 className="text-sm uppercase text-tertiary">
              A Frontend Developer
            </h4>
            <h1 className="text-3xl">Muhammad Rachmansyah Poetra</h1>
            <p className="text-sm text-tertiary">
              I am a Frontend Developer based in Banten, Indonesia.
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <a href="/about" class="about-btn">
            <img src="arrow.svg" alt="Button" />
          </a>
        </div>
      </div>
      <div className="col-span-3 rounded-3xl bg-secondary cursor-pointer">
        <Credential />
      </div>
      <div className="col-span-3 rounded-3xl bg-secondary p-6 space-y-12 cursor-pointer">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl uppercase font-extrabold text-tertiary">
            my projects
          </h1>
          <img
            src="profile.jpg"
            alt="Button"
            className="w-36 h-36 object-cover mt-[-15px] rounded-lg"
          />
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-tertiary uppercase">Showcase</p>
            <h2 className="text-2xl text-white">Projects</h2>
          </div>
          <div className="flex justify-end items-center">
            <a href="/about" class="about-btn">
              <img src="arrow.svg" alt="Button" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-3 rounded-3xl p-6 space-y-12 bg-secondary h-56 cursor-pointer"></div>
      <div className="col-span-6 rounded-3xl p-6 space-y-12 bg-secondary h-56 cursor-pointer">
        <div className="flex justify-between">
          <div>
            <p className="text-tertiary uppercase">Specialization</p>
            <h2 className="text-2xl text-white">Services Offering</h2>
          </div>
          <div className="flex justify-end items-center">
            <a href="/about" class="about-btn">
              <img src="arrow.svg" alt="Button" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-3 rounded-3xl p-6 space-y-12 bg-secondary h-56 cursor-pointer">
        <Profiles />
      </div>
      <div className="col-span-6 rounded-3xl bg-secondary p-6 space-y-12 h-56 cursor-pointer"></div>
      <div className="col-span-6 rounded-3xl bg-secondary p-6 space-y-12 h-56 cursor-pointer">
        <Talk />
      </div>
    </div>
  );
};

export default HomePage;

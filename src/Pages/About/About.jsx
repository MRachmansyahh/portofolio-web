import React from 'react';
import Talk from '../../Components/Info/Talk';
import Profiles from '../../Components/Info/Profiles';
import Credential from '../../Components/Info/Credential';

const About = () => {
  return (
    <div>
      <div className="flex gap-6 h-full">
        <div className="w-1/3 rounded-3xl bg-secondary p-6 space-y-4">
          <img
            alt="Muhammad Rachmansyah Poetra"
            src="profile.jpg"
            className="rounded-3xl object-cover w-full h-80"
          ></img>
        </div>
        <div className="w-2/3 space-y-6">
          <h1 className="uppercase font-bold text-7xl text-center">
            self-summary
          </h1>
          <div className='rounded-3xl bg-secondary p-6 space-y-4"'>
            <h2 className="font-bold text-lg">Muhammad Rachmansyah Poetra</h2>
            <p>
              I am a San francisco-based product designer with a focus on web
              design, illustration, a visual development. I have a diverse range
              of experience having worked across various fields and industries.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-6 space-y-6 text-lg rounded-3xl bg-secondary p-6">
          <h3 className="uppercase text-xl">experience</h3>
          <div className="space-y-2">
            <p className="text-tertiary">2023 - now</p>
            <p>Frontend Developer</p>
            <p className="text-tertiary">PT. Edrus Strategi Digital</p>
          </div>
          <div className="space-y-2">
            <p className="text-tertiary">2023 - 2023</p>
            <p>Infomation Technology Management Trainee</p>
            <p className="text-tertiary">PT. Edrus Strategi Digital</p>
          </div>
        </div>
        <div className="col-span-6 space-y-6 text-lg rounded-3xl bg-secondary p-6">
          <h3 className="uppercase text-xl">education</h3>
          <div className="space-y-2">
            <p className="text-tertiary">2018 - 2022</p>
            <p>Metallugical Engineering</p>
            <p className="text-tertiary">Universitas Sultan Ageng Tirtayasa</p>
          </div>
          <div className="space-y-2">
            <p className="text-tertiary">2015 - 2018</p>
            <p>High School</p>
            <p className="text-tertiary">SMAN 2 South Tangerang</p>
          </div>
        </div>
        <div className="col-span-3 space-y-6 text-lg rounded-3xl bg-secondary p-6 cursor-pointer">
          <Profiles />
        </div>
        <div className="col-span-6 space-y-6 text-lg rounded-3xl bg-secondary p-6 cursor-pointer">
          <Talk />
        </div>
        <div className="col-span-3 space-y-6 text-lg rounded-3xl bg-secondary p-6 cursor-pointer">
          <Credential />
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import NavItems from './NavItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="text-white font-bold text-2xl cursor-pointer" >
            Rachmansyah
          </div>
        </div>

        <div className="hidden md:flex">
          <NavItems layout={'horizontal'} />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <TalkButton />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
              style={{
                transition: 'transform 0.3s ease',
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen
                      ? 'M6 18 18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden relative">
          <div className="absolute inset-x-0 top-0 flex flex-col gap-4 justify-center items-center bg-primary shadow-md py-4">
            <NavItems layout={'vertical'} />
            <TalkButton />
          </div>
        </div>
      )}
    </div>
  );
};

const TalkButton = () => {
  return (
    <button className="btn bg-secondary hover:bg-white hover:text-secondary transition-colors duration-300 p-4 rounded-2xl w-full">
      <a href="./contact.html" className="text-sm">
        Let's talk
      </a>
    </button>
  );
};

export default Navbar;

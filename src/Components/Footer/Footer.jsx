import React from 'react';
import NavItems from '../Navbar/NavItems';

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center space-y-10">
      <div className="flex items-center">
        <div className="text-white font-bold text-2xl">Rachmansyah</div>
      </div>
      <NavItems layout={'horizontal'} />
      <div className="text-white text-base">
        © All rights reserved by{' '}
        <span className="text-blue-800">Muhammad Rachmansyah Poetra</span>
      </div>
    </div>
  );
};

export default Footer;

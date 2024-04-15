import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItems = ({ layout }) => {
  const location = useLocation();

  const items = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const containerClasses =
    layout === 'vertical'
      ? 'md:flex md:space-x-8 md:space-y-0 space-y-4 text-white text-center text-lg'
      : 'flex md:space-x-12 md:space-y-0 space-x-4 text-white text-center text-lg flex-row';

  return (
    <ul className={containerClasses}>
      {items.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            className={`text-tertiary hover:text-white transition-colors duration-300 ${
              location.pathname === item.link ? 'text-white' : ''
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

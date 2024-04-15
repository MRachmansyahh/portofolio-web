import React from 'react';

const Projects = () => {
  const data = [
    {
      id: 1,
      image: 'profile.jpg',
      category: 'web developer',
      name: 'marketplace',
      customer: 'Sea Labs',
    },
    {
      id: 2,
      image: 'profile.jpg',
      category: 'web developer',
      name: 'marketplace',
      customer: 'Sea Labs',
    },
    {
      id: 3,
      image: 'profile.jpg',
      category: 'web developer',
      name: 'marketplace',
      customer: 'Sea Labs',
    },
    {
      id: 4,
      image: 'profile.jpg',
      category: 'web developer',
      name: 'marketplace',
      customer: 'Sea Labs',
    },
  ];
  return (
    <div className='space-y-6'>
      <h1 className="uppercase font-bold text-7xl text-end">all projects</h1>
      <div className="grid grid-cols-12 gap-6">
        {data.map((x, id) => (
          <div
            key={id}
            className="col-span-4 rounded-3xl bg-secondary p-6 space-y-4"
          >
            <img
              alt={x.name}
              src={x.image}
              className="rounded-3xl object-cover w-full h-80"
            ></img>
            <div className='flex justify-between'>
              <div>
                <p className='uppercase text-tertiary'>{x.name}</p>
                <p className='capitalize text-2xl'>{x.customer}</p>
              </div>
              <div className="flex justify-end items-center">
                <a href="/about" class="about-btn">
                  <img src="arrow.svg" alt="Button" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

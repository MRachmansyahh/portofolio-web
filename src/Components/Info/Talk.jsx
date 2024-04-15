import React from 'react'

const Talk = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl ">Let's</h1>
      <div className="flex justify-between">
        <h1 className="text-5xl">
          work <span className="text-blue-600">together</span>
        </h1>
        <div className="flex justify-end items-center">
          <a href="/about" class="about-btn">
            <img src="arrow.svg" alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Talk
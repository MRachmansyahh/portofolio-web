import React from 'react'

const Profiles = () => {
  return (
    <div>
      <div className="flex">
        <div className="">Github</div>
        <div className="">LinkedInd</div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-tertiary uppercase">stay with me</p>
          <h2 className="text-2xl text-white">Profiles</h2>
        </div>
        <div className="flex justify-end items-center">
          <a href="/about" class="about-btn">
            <img src="arrow.svg" alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profiles
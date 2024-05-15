import React from 'react';
import '../CSS/GearsAnimation.css'; // Make sure this path is correct based on your project structure

const GearsAnimation = () => {
  return (
    <div className='flex flex-col justify-center items-center h-32'>
    <div className='w-full flex flex-col justify-center items-center mt-52'>
        <h1 className='text-black text-3xl mb-1'>404 Not Found</h1>
        <h2 className='text-black mb-6'>La page que vous cherchez n&apos;existe pas</h2>
        <div className="gearbox">
      <div className="overlay"></div>
      <div className="gear one">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="gear two">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="gear three">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="gear four large">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default GearsAnimation;

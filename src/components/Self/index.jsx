import React from 'react';
import portrait from '../../assets/portrait.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Self = () => {
  return (
    <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center'>
      <div className='flex-col my-auto mx-auto text-center sm:text-left '>
        <div className='flex justify-center sm:justify-start items-center'>
          <p className='md:text-6xl sm:text-6xl text-4xl font-bold text-white'>Hello, I'm David Park</p>
        </div>
        <h1 className='md:text-4xl sm:text-4xl text-2xl font-bold md:py-6 text-white'>
          <TypeAnimation
            sequence={[
              'Fullstack Engineer', 1000,
            ]}
            wrapper='span'
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <div className='text-5xl flex justify-center sm:justify-start gap-16 my-7 text-white'>
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className='relative inline-flex group my-3'>
          <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#bc9876] via-[#c8d05d] to-[#7c941c] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
          <a href="/" title='Download Resume' role='button' className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Resume</a>
        </div>
      </div>
      <div className='my-auto'>
        <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={portrait} alt="portrait" />
      </div>
    </div>
  );
};

export default Self;

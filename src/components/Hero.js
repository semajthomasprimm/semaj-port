import React from "react";
import {AiOutlineGithub} from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-32 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
            Hi, I'm Semaj.
          </h1>
          <p className="mb-8 sm:text-4xl text-xl">
            Software engineer and web developer.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-row px-10 sm:px-5 py-12">
        <span className="mt-1 mr-1"><AiOutlineGithub /></span><a target="_blank" rel="noopener noreferrer" href="http://github.com/semajthomasprimm" className="underline hover:text-gray-500 text-lg">github.com/semajthomasprimm</a>
      </div>
    </section>
  );
};

export default Hero;

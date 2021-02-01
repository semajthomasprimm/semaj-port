import React from "react";
import profileImg from "../assets/semaj_profile.jpg";
/* import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPhotoshop,
  DiNodejsSmall,
  DiGit
} from "react-icons/di"; */

import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-16 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            About Me<span role="img" aria-label="Waving hand">👋👋</span>
          </h1>
          <p className="mb-8 md:text-xl">
            Hi, my name is Semaj Primm. I'm from Toronto, Canada. <span role="img" aria-label="Canadian Flag">🇨🇦</span>
          </p>
          <p className="mb-8 md:text-xl">
            I am currently pursuing a 2-year diploma in Software Engineering at
            Sheridan College.
          </p>
          <p className="mb-8 md:text-xl">
            My hobbies involve playing the piano, reading, and watching
            basketball.
            <span role="img" aria-label="basketball">
              🏀
            </span>{" "}
            (Go Raptors Go!)
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg md:my-10"
            alt="hero"
            src={profileImg}
          />
        </div>
      </div>
      <div className="container mx-auto px-5 py-4 md:py-8">
        <h2 className="title-font sm:text-3xl text-xl mb-4 font-bold text-white">Skills</h2>
        <Skills />
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
          <span className="ml-3 text-5xl">S</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="#about">About</a>
          <a className="mr-5 hover:text-white" href="#work">Work</a>
          <a className="mr-5 hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

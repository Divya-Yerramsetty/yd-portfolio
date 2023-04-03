import {Link} from 'react-router-dom';
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white-100 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-black mb-4 md:mb-0">
          <Link to="/" className="ml-3 text-2xl hover:text-pink-600">Divya Yerramsetty</Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/education" className="mr-5 text-xl hover:text-pink-600">Education</Link>
          <Link to="/experience" className="mr-5 text-xl hover:text-pink-600">Experience</Link>
          <Link to="/skills" className="mr-5 text-xl hover:text-pink-600">Skills</Link>
          <Link to="/contact" className="mr-5 text-xl hover:text-pink-600">Contact</Link>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
      
    </header>
  );
}
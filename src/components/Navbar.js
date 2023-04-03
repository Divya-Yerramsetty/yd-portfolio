import {Link} from 'react-router-dom';
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-teal-50 md:sticky top-0 z-40">
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
        <div>
        <p className="flex items-center text-xl font-normal text-black-500 dark:text-black-400">
          <span className="inline-flex p-2 mr-3 bg-yellow-300 rounded-full dark:bg-yellow-600">
            <span>Currently open to C2C roles only! Visa - H1B</span>
          </span>
        </p>
        </div>
      </div>
    </header>
  );
}
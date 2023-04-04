import React from "react";
import {Link} from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="h-screen">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 px-2 font-medium text-pink-600">
            Hi, I'm <span className="font-bold">Divya Yerramsetty.</span>
            <br className="hidden lg:inline-block" />I love to build amazing
            web apps.
          </h1>
          
          <p className="mb-8 px-2 leading-relaxed text-2xl font-medium">
            User Interface (UI) / Full Stack Developer | Experience in Insurance | E-Commerce | Travel booking apps | Energy | Fin-Tech Domains
          </p>
          <p className="mb-8 px-2 leading-relaxed text-xl font-medium">
            Total IT Experience - Around 9 yrs | US Experience - 6 yrs | Located in Texas (Open to Relocate)
          </p>
          <div className="flex justify-center">
            <a className="inline-flex text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
              href="./Divya.docx" download>
            <button>Dowload Resume</button>
            </a>
            <Link to="/contact" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg">
              Contact
            </Link>
            <Link to="/experience" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg">
              Experience
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="rounded-bl-3xl rounded-tr-3xl"
            alt="hero"
            src="./Div.jpeg"
            height = "500px"
            width = "500px"
          />
        </div>
      </div>
    </section>
  );
}
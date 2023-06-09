import React from "react";

export default function Education() {
  return (
    <section id="education" className="text-black-400 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-20 h-auto">
        <div className="flex flex-col w-full mb-20">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 animate-fade-in-down">                  
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 -left-3 ring-8 ring-white">
                  <img src="./academic.svg" alt="cap"/>
                </span>
                <h3 className="mb-2 text-3xl font-semibold text-pink-600 dark:text-pink-600">Masters in Information Science</h3>
                <time className="block text-lg mb-2 text-lg font-normal leading-none text-black-400 dark:text-black-500">Graduated in May, 2018</time>
                <p className="text-base text-lg font-bold text-black-500 dark:text-black-400">University of North Texas, Denton, TX.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 -left-3 ring-8 ring-white">
                  <img src="./academic.svg" alt="cap"/>
                </span>
                <h3 className="mb-2 text-3xl font-semibold text-pink-600 dark:text-pink-600">Bachelors in Mechanical Engineering</h3>
                {/* <time className="block text-lg mb-2 text-lg font-normal leading-none text-black-400 dark:text-black-500">Graduated in May, 2013</time> */}
                <p className="text-base text-lg font-bold text-black-500 dark:text-black-400">Institute of Aeronautical Engineering affiliated to JNTUH, Hyderabad, India.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
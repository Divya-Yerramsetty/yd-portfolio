import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="education" className="text-black-400 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-20 h-auto">
        <div className="flex flex-col w-full mb-20 animate-fade-in-down">
          <ol className="relative border-l border-gray-200 dark:border-gray-200">
            {experience.map((val) => (
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 -left-3 ring-8 ring-white">
                  <img src="./work.svg" alt="work"/>
                </span>
                <h3 className="mb-2 text-2xl font-semibold text-pink-600 dark:text-pink-600">{val.company}</h3>
                <time className="block text-xl mb-2 text-sm font-normal leading-none text-purple-600 dark:text-black-500">{val.date}</time>
                <p className="text-base text-xl font-bold text-black-500 dark:text-black-500">{val.role}</p>
                <p className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 dark:hover:bg-gray-100">
                  {val.responsibilities.map((item) => (
                    <li className="list-disc">{item}</li>
                  ))}
                  <p className="pt-2 text-base text-md font-normal text-black-500 dark:text-black-400">Environment: {val.environment}</p>
                </p>  
              </li>
            ))}               
          </ol>
        </div>
      </div>
    </section>
  )
}
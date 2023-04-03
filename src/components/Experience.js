import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="education" className="text-black-400 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-20 h-auto">
        <div className="flex flex-col w-full mb-20">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            {experience.map((val) => (
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img src="./work.svg" alt="work"/>
                </span>
                <h3 class="mb-2 text-2xl font-semibold text-pink-600 dark:text-white">{val.company}</h3>
                <time class="block text-xl mb-2 text-sm font-normal leading-none text-purple-600 dark:text-black-500">{val.date}</time>
                <p class="text-base text-xl font-bold text-black-500 dark:text-black-400">{val.role}</p>
                {/* <p class="text-base text-xl font-normal text-black-500 dark:text-black-400">
                  {val.responsibilities.map((item) => (
                    <li class="list-disc">{item}</li>
                  ))}
                </p> */}
              </li>
            ))}               
          </ol>
        </div>
      </div>
    </section>
  )
}
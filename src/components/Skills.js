import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { advancedSkills, intermediateSkills, beginnerSkills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        {/* <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-pink-600 mb-4">
            Skills &amp; Technologies
          </h1>
        </div> */}
        <h4 className="text-left sm:text-2xl text-2xl pl-20 font-medium title-font text-green-400 mb-4">
          Advanced Level
        </h4>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {advancedSkills.map((val) => (
            <div className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white mr-5">
                  {val.skill}
                </span>
                {/* <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{val.proficiency}</span> */}
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-left sm:text-2xl text-2xl pl-20 font-medium title-font text-yellow-400 mb-4">
          Intermediate Level
        </h4>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {intermediateSkills.map((val) => (
            <div className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white mr-5">
                  {val.skill}
                </span>
                {/* <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{val.proficiency}</span> */}
              </div>
            </div>
          ))}
        </div>
        
        <h4 className="text-left sm:text-2xl text-2xl pl-20 font-medium title-font text-pink-400 mb-4">
          Beginner Level
        </h4>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {beginnerSkills.map((val) => (
            <div className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white mr-5">
                  {val.skill}
                </span>
                {/* <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{val.proficiency}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
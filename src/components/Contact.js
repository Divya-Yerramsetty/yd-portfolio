import React from "react";

export default function Contact() {
  
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap animate-fade-in-up">
        <p className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 dark:hover:bg-gray-100">
          <h6 className="text-pink-600 sm:text-2xl text-xl mb-1 font-medium title-font">Please reach me at</h6>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Email: divya92ui@gmail.com</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Phone: +1 530-988-8260</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">LinkedIn: <a href="https://www.linkedin.com/in/divya-y-01291b155">https://www.linkedin.com/in/divya-y-01291b155/</a></h5>
        </p>
      </div>
    </section>
  );
}
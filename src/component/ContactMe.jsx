import React from "react";

const ContactMe = () => {
  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Want to hire me as a freelancer? Let's discuss.
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop your message and let's discuss your project.
      </p>
      <a
        href="https://wa.me/7889962051?text=I want to work on a project with you"
        className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
      >
        Chat on WhatsApp
      </a>
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop your email ID and I will get back to you.
      </p>
      <form className="relative my-4">
        <input
          type="email"
          aria-label="Email for newsletter"
          placeholder="Pankaj@gmail.com"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

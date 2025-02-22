import React, { useState } from "react";

const IntroHeading = () => {


  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Pankaj Namotra
        </h1>
        <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
          Building
          <a
            className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1"
            href="https://aceternity.com"
            target="__blank"
          >
            Aceternity
          </a>
          ,
          <a
            className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white mx-1"
            href="https://userogue.com"
            target="__blank"
          >
            Rogue
          </a>
          other{' '}
          <a
            className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200"
            href="https://userogue.com"
            target="__blank"
          >
            cool things
          </a>  
        </div>
        <p className="text-zinc-600 dark:text-zinc-500"> Senior Software Engineer building SaaS products and web apps. Find me on <a href="https://twitter.com/mannupaaji" class="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden" target="__blank"><span class="relative">twitter</span></a> for tech updates and memes.</p>
      </div>
    </div>
  );
};

export default IntroHeading;

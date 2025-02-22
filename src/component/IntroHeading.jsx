import React, { useState } from "react";
import AvatarImage from "./AvatarImage";
import RecentBlogs from "./RecentBlogs";

const IntroHeading = () => {
    const [blog, setBlog] = useState([
        {
            name: "Ace the Javascript Interview - Practical questions to help you clear your next interview",
            other: "22, Feb 2025",
            link: "/blog/ace-the-javascript-interview",
        },
        {
            name: "Free portfolio website template that gets you hired in 2021",
            other: "20, Feb 2025",
            link: "/blog/developer-portfolio-website",
        },
    ]);


  return (
    <>
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
        <p className="text-zinc-600 dark:text-zinc-500"> Senior Software Engineer building SaaS products and web apps. Find me on <a href="https://twitter.com/mannupaaji" className="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden" target="__blank"><span className="relative">twitter</span></a> for tech updates and memes.</p>
      </div>
      <AvatarImage/>
    </div>
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">Recent Blogs</h3>
    <RecentBlogs blogElement= {blog}/>
    </>
  );
};

export default IntroHeading;

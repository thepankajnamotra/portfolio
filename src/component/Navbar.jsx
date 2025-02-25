import { Menu, Moon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ setDark }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((last) => !last);
  };
  useState(() => {
    if (mobileNav) {
    }
  }, [mobileNav]);

  return (
    <div className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white dark:bg-zinc-900 bg-opacity-60">
      <Link to="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </Link>
      <button
        onClick={() => {
          setDark((last) => !last);
        }}
        aria-label="Toggle Dark Mode"
        type="button"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-teal-500/50 dark:hover:ring-white/20"
      >
        <Moon className="h-4 w-4 text-gray-800 dark:text-teal-500" />
      </button>
      <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
        <Link
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          to="/"
        >
          <span className="relative z-10 text-teal-600">Home</span>
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        </Link>
        <Link
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          href="/"
        >
          <span className="relative z-10 text-gray-600 dark:text-gray-50">
            Blog
          </span>
        </Link>
        <Link
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          href="/"
        >
          <span className="relative z-10 text-gray-600 dark:text-gray-50">
            Resources
          </span>
        </Link>
        <Link
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          href="/"
        >
          <span className="relative z-10 text-gray-600 dark:text-gray-50">
            Projects
          </span>
        </Link>
      </div>
      <div
        className="block sm:hidden"
      >
        <div className="w-full flex flex-row items-center space-x-2">
          <button className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
            Home
          </button>
          <button className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900">
            Projects
          </button>
          {/* mobile development */}
          <button
            onClick={toggleMobileNav}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
          >
            <Menu className="w-6 h-6 text-black dark:text-white" size={24} />
          </button>
          {mobileNav && (
            <div class="absolute  inset-x-0 mx-auto top-20 flex flex-col w-[90%] p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-gray-800 divide-y dark:divide-gray-700">
              <Link
                to={"/"}
                class="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span class="relative z-10">Blog</span>
              </Link>
              <Link
                to={"/"}
                class="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span class="relative z-10">Snippets</span>
              </Link>
              <Link
                to={"/"}
                class="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span class="relative z-10">Resources</span>
              </Link>
              <Link
                to={"/"}
                class="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span class="relative z-10">Freelancing</span>
              </Link>
              <Link
                to={"/"}
                class="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span class="relative z-10">Box Shadows</span>
              </Link>
              <Link
                to={"/"}
                class="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <span class="relative z-10">FreeCodeCamp</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

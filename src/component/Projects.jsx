import { PenTool } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Projects = ({ project, titleElement }) => {
  if (!project || project.length === 0) {
    return null;
  }
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        {titleElement}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.map((item, i) => {
          return (
            <a
              key={i}
              className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
              href={item.link}
              aria-label={item.heading}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]">
                  <div className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="relative h-full">
                  <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                  <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                  <div className=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                    <div className="my-4">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {item.heading}
                      </h4>
                      <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
                        {item.desc}
                      </p>
                      <div className="pt-4 flex md:flex-row flex-wrap">
                        {item.skill.map((skill, i) => {
                          return (
                            <p
                              key={i}
                              className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1"
                            >
                              {skill}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Projects;

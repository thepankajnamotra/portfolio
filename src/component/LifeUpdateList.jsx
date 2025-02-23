import { CircleCheckBig } from "lucide-react";
import React from "react";

const LifeUpdateList = ({ current }) => {
  if(!current || current.length===0) return;
  return (
    <>
      <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
        {current.year}
      </h3>
      <ul>
        {(current.steps).map((element, i) => {
          return (
            <li key={i}  className="mb-4 ml-2">
              <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <CircleCheckBig
                  color={"rgb(59, 130, 246)"}
                  className="text-blue-500 mr-2"
                  size={22}
                />
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {element.heading}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-6">
                {element.desc}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
    </>
  );
};

export default LifeUpdateList;

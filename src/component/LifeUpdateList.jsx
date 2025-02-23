import { CircleCheckBig } from "lucide-react";
import React from "react";

const LifeUpdateList = () => {
  return (
    <>
      <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
        2023
      </h3>
      <ul>
        <li className="mb-4 ml-2">
          <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
            <CircleCheckBig color={"rgb(59, 130, 246)"} className="text-blue-500 mr-2" size={22}/>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              300+ users on Algochurn 🤌🏻
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-400 ml-6">
            <a href="https://algochurn.com" target="__blank">
              Algochurn
            </a>{" "}
            crossed 300 users and I couldn't be any happier.
          </p>
        </li>
      </ul>
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
    </>
  );
};

export default LifeUpdateList;

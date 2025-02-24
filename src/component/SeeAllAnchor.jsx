import { ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const SeeAllAnchor = ({ link, text, toggleShowMore }) => {
  return (
    <>
      <Link onClick={toggleShowMore}
        to={link}
        className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium capitalize text-gray-900 dark:text-gray-100"
      >
        {text}
        <ChevronDown size={20} className="h-4 w-4 ml-1" />
      </Link>
    </>
  );
};

export default SeeAllAnchor;

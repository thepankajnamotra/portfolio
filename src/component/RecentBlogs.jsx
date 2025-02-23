import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";  // Changed to react-router-dom
import SeeAllAnchor from "./SeeAllAnchor";

const RecentBlogs = ({ blogElement }) => {
  // Guard clause for empty or undefined blogElement
  if (!blogElement || blogElement.length === 0) {
    return null;
  }

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Recent Blogs
      </h3>
      
      {blogElement.map((current, i) => (
        <Link
          key={i}
          to={current.link}
          className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200"
        >
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
                {current.name}
              </h4>
              <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                {current.other}
              </p>
            </div>
          </div>
        </Link>
      ))}
      <SeeAllAnchor link={'/blogs'} text={'See all  blogs'}/>
    </>
  );
};

export default RecentBlogs;
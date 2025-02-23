import { Link } from "react-router-dom";  // Changed to react-router-dom

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

      <Link 
        to="/blog"
        className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
      >
        See All Blogs
        <svg 
          className="h-4 w-4 ml-1" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </>
  );
};

export default RecentBlogs;
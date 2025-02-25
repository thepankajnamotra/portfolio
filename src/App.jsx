import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./page/HomePage";
import { Moon } from "lucide-react";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-zinc-900">
      {/* temperary navigation */}
      <div className="sticky-nav flex justify-between items-center max-w-4xl w-full pt-8 mt-0 mb-0 mx-auto bg-white dark:bg-zinc-900 bg-opacity-60">
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
      </div>
      {/* temperary navigation ends */}

      {/* <Navbar setDark={setDark} /> */}
      <HomePage />
    </div>
  );
}

export default App;

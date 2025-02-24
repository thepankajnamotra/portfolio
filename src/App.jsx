import { useEffect, useState } from "react"
import Navbar from "./component/Navbar"
import HomePage from "./page/HomePage"

function App() {
  const [dark, setDark]= useState(
    localStorage.getItem('theme') === 'dark'
  );
  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
    else{
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },[dark]);

  return (
    <div className="bg-white dark:bg-zinc-900">
      <Navbar setDark={setDark} />
      <HomePage/>
  </div>
  )
}

export default App

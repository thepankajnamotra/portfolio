import React, { useState } from "react";
import AvatarImage from "./AvatarImage";
import RecentBlogs from "./RecentBlogs";
import Projects from "./Projects";
import { Anchor, Banana, PenTool, UtensilsCrossed } from "lucide-react";
import LifeUpdates from "./LifeUpdates";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

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
    const [project, setProject] = useState([
      {
        icon: <PenTool size={"34"} />,
        heading: 'Moonbeam',
        desc: 'Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.',
        link: '/',
        skill: ["Front-end", "GPT-3","Next.js", "React","TailwindCSS","Chrome Extension"]
      },
      {
        icon: <Anchor size={"34"} />,
        heading: 'Moonbeam',
        desc: 'Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.',
        link: '/',
        skill: ["Next.js","React","TailwindCSS","Full-Stack"]
      },
      {
        icon: <Banana size={"34"} />,
        heading: 'Moonbeam',
        desc: 'Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.',
        link: '/',
        skill: ["Next.js","Stripe","TailwindCSS"]
      },
      {
        icon: <PenTool size={"34"} />,
        heading: 'Moonbeam',
        desc: 'Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.',
        link: '/',
        skill: ["Front-end", "GPT-3","Next.js", "React","TailwindCSS","Chrome Extension"]
      }
    ]);
    const [upcommingProject, setUpcommingProject] = useState([
      {
        icon: <UtensilsCrossed size={"34"} />,
        heading: 'Moonbeam',
        desc: 'Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.',
        link: '/',
        skill: ["Next.js","Stripe","TailwindCSS"]
      }
    ])
    const [lifeUpdate, setLifeUpdate] = useState([
      {
        year: '2023',
        steps: [
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: <><a href='https://algochurn.com' className="hover:underline" target='__blank'>{" "} Algochurn </a> crossed 300 users and I couldn't be any happie</>
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          }
        ]
      },
      {
        year: '2022',
        steps: [
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          }
        ]
      },
      {
        year: '2021',
        steps: [
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          },
          {
            heading: '300+ users on Algochurn 🤌🏻', 
            desc: "Algochurn crossed 300 users and I couldn't be any happier."
          }
        ]
      }
    ])


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
    <RecentBlogs blogElement= {blog}/>
    <Projects project={project} titleElement={'Projects'}/>
    <Projects project={upcommingProject} titleElement={'Upcomming Projects'}/>
    <LifeUpdates lifeUpdate={lifeUpdate}/>
    <ContactMe />
    <Footer/>
    </>
  );
};

export default IntroHeading;

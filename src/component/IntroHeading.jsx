import React, { useState } from "react";
import AvatarImage from "./AvatarImage";
import RecentBlogs from "./RecentBlogs";
import Projects from "./Projects";
import { Anchor, Banana, MessagesSquare, PenTool, Plane, User, UtensilsCrossed } from "lucide-react";
import LifeUpdates from "./LifeUpdates";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { href } from "react-router";

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
        icon: <Plane size={"34"} />,
        heading: 'TravelKro E-Commerce',
        desc: 'B2B flight booking website using Node.js, Express.js, and MySQL. It offers a user-friendly interface for businesses to search and book flights.',
        link: 'https://github.com/thepankajnamotra/ecom_with_expresss_DB',
        skill: ["Front-end","EXPRESS,", "React","NODE","MYSQL","EJS"]
      },
      {
        icon: <User size={"34"} />,
        heading: 'Discussion app',
        desc: 'Discussion app Project that stores data in local storage and fetches data from local storage. Having the functionality of response and votes to the question so that the question can be sorted according to the weightage.',
        link: 'https://github.com/thepankajnamotra/discusssion_app',
        skill: ["Front-end","JS,", "Local Storage","MYSQL"]
      },

    ]);
    const [upcommingProject, setUpcommingProject] = useState([
      {
        icon: <MessagesSquare size={"34"} />,
        heading: 'PotatoChat',
        desc: 'An open-source app empowering communities with full data control and self-hosting freedom',
        link: 'https://github.com/thepankajnamotra/potatochat',
        skill: ["React.js","Redux","TailwindCSS", "Web socket", "WebRTC", "Node.js", "MongoDB"]
      },
      {
        icon: <UtensilsCrossed size={"34"} />,
        heading: 'RestroSync',
        desc: 'a cloud kitchen solution (IOS, Android, web) , designed to streamline and supercharge food businesses!',
        link: 'https://restrosync.zyptec.com/',
        skill: ["Next.js","TailwindCSS", "TypesScript", "Node.js", "PostgreSQL", "React native"]
      }
    ])
    const [lifeUpdate, setLifeUpdate] = useState([
      {
        year: '2025',
        steps: [
          {
            heading:  <>Building – <a href="https://github.com/thepankajnamotra/potatochat" target="_blank" className=" underline">PotatoChat</a> 🥔💬</>,
            desc: "PotatoChat—an open-source app empowering communities with full data control and self-hosting freedom"
          },
          {
            heading: <>First In-House SaaS – <a href="https://restrosync.zyptec.com/" target="_blank" className=" underline">RestroSync</a> ✨</>,
            desc: "zyptec team is Building RestroSync, a cloud kitchen solution (IOS, Android, web) , designed to streamline and supercharge food businesses!"
          },
          
        ]
      },
      {
        year: '2024',
        steps: [
          {
            heading: <>Founded <a href="Zyptec.com" target="_blank" className=" underline">Zyptec</a> 🚀</>, 
            desc: "Built a freelancing team that runs on autopilot—delivering hybrid mobile apps, full-stack web apps, WordPress solutions, and Shopify sites like a pro!"
          },
          {
            heading: "Freelanced shopify  🛍️",
            desc: "Developed some Shopify and WordPress websites under Zyptec."
          },
        ]
      },
      {
        year: '2023',
        steps: [
          {
            heading: "Internship - Codequotient 🤘🏻", 
            desc: <>Landed an internship at <a href='https://codequotient.com/' className="underline" target='_blank'> CodeQuotient</a>—built a B2B flight booking system prototype and a web crawler. Leveling up my dev game</>
          },
          {
            heading: "Placements - Got Placed ✨",
            desc: <> Secured Off campus Internship with Pre Placement offer from  <a href='https://www.valueresearchonline.com/' className="underline" target='_blank'>Value research</a> Working on their Flagship product as a Front-End Developer.

            </>
          },
        ]
      },
      {
        year: '2022',
        steps: [
          {
            heading: "Campus Designer & NCC Coordinator 🎖️",
            desc: "Became graphic designer for my college campus, joined NCC, and even rose to the rank of NCC Coordinator balancing creativity with discipline!"
          }
        ]
      },
      {
        year: '2021',
        steps: [
          {
            heading: 'Started freelancing 🍾', 
            desc: <>Started freelancing wordpress and shopify websites and booked some clients like: <a href="https://kishmishstudio.com/" className="underline" target='__blank'>kishmishstudio</a>, <a href="https://blingthingstore.com/" className="underline" target='__blank'>blingthingstore</a> and more.</>
          },
          {
            heading: "Built for Schools 🏫",
            desc: "Collaborated with a local school to develop an employee management system using PHP turning code into solutions"
          },
          {
            heading: "Freelancing for an Astrologer 🔮",
            desc: "Helped an astrologer take their business online planned digital strategy. cool experience and 70km from home."
          }
        ]
      },
      {
        year: '2020',
        steps: [
          {
            heading: "Another Magazine Startup Adventure 😅",
            desc: "Launched a magazine startup, secured our first funding from a local printing company… but eventually, it didn’t go as planned."
          },
          {
            heading: 'Started Masters in Computers 🔥', 
            desc: "Took the next big step in my education pursuing a Master's in Computer Applications."
          },
          {
            heading: "Govt. Exam Hustle 🎯",
            desc: "With no internet in Jammu and kashmir, I turned to government exam prep—worked hard, cracked one, but decided not to join. Plot twist."
          }
        ]
      },
      {
        year: '2019',
        steps: [
          {
            heading: 'Director in the Making 📷', 
            desc: "Discovered my passion for videography, direction, and photo editing—directed a song, edited it, and even captured multiple weddings. I enjoyed it!✨"
          },
          {
            heading: 'Diving into the Logistics Game 🚛', 
            desc: "Joined my maternal uncle's (Mamu’s) logistics business as a partner and navigated the industry for over three years."
          },
          {
            heading: 'Survived 1.5+ yrs Without Internet 🚫💻', 
            desc: "Endured the internet shutdown after Article 370 was revoked—forced to shut down my digital marketing startup and videography business. A true offline survival challenge!"
          }
        ]
      },
      {
        year: '2018',
        steps: [
          {
            heading: 'Started College 🔥', 
            desc: "Came back to home town from Triputra and Opted for Bachelor of Computer Applications, in Govt. Degree College Kathua, Jammu."
          },
          {
            heading: 'Startup - Digital marketing agency 💣', 
            desc: "Started a web development and digital marketing agency from scratch. Generated revenue and handled Social media accounts of clients."
          },
          {
            heading: 'Developed interest in Web Development 🚀', 
            desc: "Youtube introduced me to Web Development. Followed Triversy media on youtube and started off by making Landing pages with a keen interest in design."
          },
          {
            heading: 'C and C++ 🙌🏻', 
            desc: "Started learning programming logic, explored a bit of DSA with C, and had fun."
          },
          {
            heading: 'First BackLock 😂', 
            desc: "I consider this as an achievement. If you're a CS Student, you must have a back in Mathematics."
          },

        ]
      },
      {
        year: '2017',
        steps: [
          {
            heading: 'Completed 12th Grade 📜', 
            desc: "Completed 12th grade with 98 Marks in Computer. Again, a big achievement for me."
          },
          {
            heading: 'Got First Computer 💻', 
            desc: "I played GTA 5 all day, and flashed custom rom for the first time. "
          }
        ]
      },
      {
        year: '2016',
        steps: [
          {
            heading: 'First Flight & New Beginnings ✈️', 
            desc: "Moved to Tripura from home state, took my first flight—felt like a VIP, and got admission in Kendriya Vidyalaya"
          },
          {
            heading: 'House Captain & Medal Winner 🙋‍♂️', 
            desc: "Stepped up as house captain for the first time and my house secured a medal in volleyball and kabaddi, leading the team like a champ!"
          }
        ]
      },
      {
        year: '2015',
        steps: [
          {
            heading: 'Completed 10th Grade 📜', 
            desc: "I was an average student—but a proud leader of the legendary backbenchers' squad! 😎"
          },
          {
            heading: 'Participated in Drama Skit 💂🏼‍♀️', 
            desc: "For the first time, I had the incredible opportunity to participate in a drama skit, where I portrayed the legendary Bhagat Singh."
          },
          {
            heading: 'Helping Hand & Leadership Medal 🏅', 
            desc: 'Won a medal on the school’s annual day for being the ultimate “Go-To” person—whether it was helping classmates, or leading group projects. 👏'
          },
        ]
      },
      {
        year: '2008',
        steps: [
          {
            heading: 'First interaction with Computer 💻', 
            desc: "I played first computer game i.e., Moto GP"
          }
        ]
      },
      {
        year: '2004',
        steps: [
          {
            heading: 'Got admission in BSF 🏫', 
            desc: "Got admission in BSF Military school and moved from home town to Jammu capital city."
          }
        ]
      },
      {
        year: '1999',
        steps: [
          {
            heading: 'Celebration', 
            desc: "An Enginner was Born in India 👶🏼 🍼"
          }
        ]
      },
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
            className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white mx-1"
            href="http://restrosync.zyptec.com/"
            target="__blank"
          >
            Restrosync
          </a>,
          <a
            className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1"
            href="https://github.com/thepankajnamotra/potatochat"
            target="__blank"
          >
            Potatochat
          </a>
          other{' '}
          <a
            className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200"
            href="https://github.com/thepankajnamotra"
            target="__blank"
          >
            cool things
          </a>  
        </div>
        <p className="text-zinc-600 dark:text-zinc-500"> Software Engineer building web apps and exploring new tech. Find me on <a href="https://x.com/pankajnamotra" className="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden" target="__blank"><span className="relative">x.com</span></a> for tech updates and memes.</p>
      </div>
      <AvatarImage/>
    </div>
    {/* <RecentBlogs blogElement= {blog}/> */}
    <Projects project={project} titleElement={'Projects'}/>
    <Projects project={upcommingProject} titleElement={'Upcomming Projects'}/>
    <LifeUpdates lifeUpdate={lifeUpdate}/>
    <ContactMe />
    <Footer/>
    </>
  );
};

export default IntroHeading;

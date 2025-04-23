import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer Intern",
  //   company_name: "Intern at Curowell Healthcare Private Ltd",
  //   icon: "/assets/company/curowell-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "November 2023",
  //   points: [
  //     "Developing a healthcare SaaS platform using Next.js, TypeScript, and Tailwind CSS, significantly enhancing user experience.",
  //     "Maintaining an efficient codebase under senior guidance, ensuring adherence to best practices in software development.",
  //     "Contributing to the DND form microfrontend, improving user interaction by 30%.",
  //     "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
  //   ],
  // },


  {
    title: "Full Stack Developer & AI Integrator",
    company_name: "Sanskrit AI Learning Platform",
    icon: "/assets/company/sanskrit-ai-logo.svg", // Replace with your actual logo path
    iconBg: "#F2E9E1",
    date: "January 2024 - Present",
    points: [
      "Developed an AI-powered Sanskrit learning platform using Next.js, TypeScript, and Tailwind CSS for a modern, responsive UI.",
      "Integrated OpenAI’s API to enable intelligent Sanskrit grammar analysis, pronunciation guidance, and translation support.",
      "Implemented Docker for containerization and scalability, preparing the platform for Kubernetes-based deployment.",
      "Built multilingual support and adaptive content delivery, enhancing accessibility for diverse learners globally.",
    ],
  },
  
  {
    title: "Founder & Full Stack Developer",
    company_name: "DivineWal.ai",
    icon: "/assets/company/divinewal-logo.svg", // Replace with your actual logo path
    iconBg: "#E8EAF6",
    date: "March 2024 - Present",
    points: [
      "Built DivineWal.ai, an AI-powered platform generating 4K spiritual and devotional wallpapers using cutting-edge diffusion models.",
      "Developed the platform using Next.js, TypeScript, Tailwind CSS, and integrated image generation via custom OpenAI-powered APIs.",
      "Designed and implemented user authentication, download tracking, and SEO-optimized dynamic image pages for enhanced reach.",
      "Launched a scalable, performance-optimized frontend experience with responsive design, catering to global users across devices.",
    ],
  },
  
  {
    title: "Game Developer",
    company_name: "JioGames Platform",
    icon: "/assets/company/jiogames-logo.svg", // Replace with actual logo path
    iconBg: "#F0F4C3",
    date: "February 2024 - Present",
    points: [
      "Developed 'The Auto Express', a hyper-casual HTML5 autorickshaw game with 20 levels, optimized for mobile-first gameplay and JioGames platform deployment.",
      "Created a detailed Game Design Document (GDD) following JioGames' submission guidelines to ensure alignment with platform standards.",
      "Integrated level progression, obstacle mechanics, and interactive controls using JavaScript and Phaser framework for smooth user experience.",
      "Collaborated on a promotional game trailer to enhance discoverability and showcase gameplay highlights on the JioGames store.",
    ],
  }
];
  

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

 const projects = [
//   {
//     name: "QuickEdit: AI-Powered Image & Video Editor",
//     description:
//       "QuickEdit is an AI-powered online image and video editor built using the Cloudinary AI API. It offers robust features for both images and videos, with user-friendly authentication and a tiered credit system. Enhance your media editing experience with cutting-edge AI tools!",
//     tags: [
//       {
//         name: "typescript",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "next.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwindcss",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "shadcn",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "cloudinary",
//         color: "yellow-text-gradient",
//       },
//     ],
//     image:
//       "https://res.cloudinary.com/dqiqi75hm/image/upload/v1734187202/quickedit/dp6y8s8dstqfpq7svmj5.png",
//     source_code_link: "https://github.com/Shivam-Sharma-1/QuickEdit",
//     deployed_link: "https://quick-edit-app.vercel.app",
//   },
  {
    name: "DivineWall.ai",
    description:
      "DivineWall.ai is an AI-powered wallpaper generation platform that provides high-resolution 4K spiritual and aesthetic wallpapers. Built with Next.js, Tailwind CSS, and integrated with the OpenAI API, the platform supports personalized generation, multi-device responsiveness, and seamless user experience.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "purple-text-gradient",
      },
      {
        name: "vercel",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/divinewall-ai.png", // Replace with your actual image path
    source_code_link: "https://github.com/Guddu8677/divine-wall", // Update with your real repo
    deployed_link: "https://divinewall.in/", // Update with actual deployment link
  },
  
    {
      name: "Indian Law AI: Legal Research Platform",
      description:
        "Indian Law AI is an AI-powered legal research platform developed with Laravel and integrated with OpenAI. It provides intelligent legal case search, reference toolbars for guidance, multilingual support, and image-based legal lookup capabilities, streamlining legal research across India's judiciary systems.",
      tags: [
        {
          name: "laravel",
          color: "red-text-gradient",
        },
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "purple-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: "/assets/projects/indian-law-ai.png", // Replace with the actual path to your project image
      source_code_link: "https://github.com/Guddu8677/IndianLaw", // Replace with your actual repo
      deployed_link: "https://indian-law-bice.vercel.app/", // Replace with actual deployment link
    },
  
  
  {
    name: "Sanskrit AI Learning Platform",
    description:
      "Sanskrit AI is an AI-powered educational platform designed to facilitate the learning of Sanskrit. It offers interactive modules, voice-enabled pronunciation guidance, and personalized learning paths powered by machine learning. The platform is containerized using Docker for seamless scalability and deployment.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
      {
        name: "openai",
        color: "purple-text-gradient",
      },
    ],
    image: "/assets/projects/sanskrit-ai.png", // Replace with actual path to your image
    source_code_link: "https://github.com/Guddu8677/winter_pep_project", // Replace with your real repo URL
    deployed_link: "https://www.sanskritai.in/", // Replace with real deployment link
  },
  
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
   {
  name: "MyResearchPaper.ai: AI-Powered Research Assistant",
  description:
    "MyResearchPaper.ai is an AI-driven platform designed to assist researchers and students in streamlining the research process. It helps users generate research outlines, find scholarly references, check plagiarism, and supports multiple citation styles using OpenAI and other NLP tools.",
  tags: [
    {
      name: "next.js",
      color: "blue-text-gradient",
    },
    {
      name: "openai",
      color: "green-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "orange-text-gradient",
    },
    {
      name: "typescript",
      color: "yellow-text-gradient",
    },
  ],
  image: "/assets/projects/myresearchpaper-ai.png", // Replace with your actual image path
  source_code_link: "https://github.com/Guddu8677/my-research-paper", // Replace with your actual repo
  deployed_link: "https://myresearchpaper.in/", // Replace with actual deployment
}

  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Guddu8677",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/guddu-kumar-434572247/",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/future_boy08/",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};

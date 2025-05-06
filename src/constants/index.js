import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  news,
  bikebooking,
  godown,
  reaf,
  banao,

  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  // {
  //   // title: "Content Creator",
  //   // icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Refease",
    icon: reaf,
    iconBg: "#383E56",
    date: "May 2023 - Jan 2024",
    points: [
      "📈 Achieved a 30% increase in user numbers by consistently posting daily job opportunities",
      "🎯 Boosted user engagement by 45% through successful planning and execution of webinars",
      "🤝 Facilitated cross-team communication and supported referral seekers in achieving their career goals",
      "🧩 Implemented user feedback loops to refine platform features, leading to higher user satisfaction and retention",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Banao Technologies",
    icon: banao,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "📱 Built cross-platform mobile applications using React Native with clean UI and responsive UX",
      "🤝 Collaborated with designers, product managers, and developers to deliver high-quality features",
      "🎨 Implemented responsive designs ensuring consistent experience across devices and platforms",
      "🧑‍💻 Participated in code reviews and shared constructive feedback to maintain code quality",
      "🚀 Optimized app performance and usability through continuous improvements and debugging"
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Banao Technologies",
    icon: banao,
    iconBg: "#383E56",
    date: "May 2024 - Nov 2024",
    points: [
      "💻 Developed and maintained full-stack web applications using React.js, Node.js, Express, and MongoDB",
      "🤝 Collaborated with cross-functional teams to deliver scalable and user-friendly features",
      "🎨 Implemented responsive design ensuring cross-device compatibility and modern UX",
      "🧪 Participated in code reviews, improving team code quality and sharing best practices",
      "🚀 Optimized performance and handled REST API integration with robust backend logic"
    ],
  },
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
  {
    name: "NewsApp Website",
    description:
      "Web-based platform that allows users to search and read various types of news.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "newsapi",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cab Booking App",
    description:
      "Designed and developed a two-wheeler booking app with advanced search and ride-booking features. Performance-optimized cross-platform app, ensuring smooth user experience and real-time updates.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bikebooking,
    source_code_link: "https://github.com/",
  },
  {
    name: "Godown Booking App",
    description:
      "Designed and developed a fully responsive online platform for booking storage spaces, catering to various user needs for short-term and long-term rentals. Implemented a clean, user-friendly interface to enhance navigation and usability across devices.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "ContextApi",
        color: "pink-text-gradient",
      },
    ],
    image: godown,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

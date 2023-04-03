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
  express,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  egm,
  dci,
  total,
  freelance,
  veraah,
  hafenx,
  threejs,
  smartfarben,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
  },
  {
    title: "E-Commerce Specialist",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
    name: "Express",
    icon: express,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "DCI Digital Career Institute gGmbH ",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "February 2022 - Present",
    points: [
      "Accomplishing a one-year-full-time training including technologies from MERN stack.",
      "Completing multiple small and one final practical project to practice programming skills.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Taking English lessons as part of the course with a certificate in Level B2.",
    ],
  },
  {
    title: "IT Field Engineer (Backfill)",
    company_name: "Total IT Global",
    icon: total,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Providing IT support in face-to-face environment for end user",
      "Documented and upgraded activates vie Ticket Management System.",
      "Performing installation, training, maintenance, troubleshooting of desktop technology hardware and software.",
      "Diagnose and quickly resolve a wide range of Windows applications and networking problems to help minimize downtime.",
    ],
  },
  {
    title: "Web Designer - UI/UX Designer ",
    company_name: "Freelance (Wordpress - Shopify - Webflow)",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Sep 2016 - Feb 2022",
    points: [
      "Creating website designs and producing sample sites",
      "Meeting with clients to discuss requirements and/or project progress",
      "Keeping up to date with recent technological and software developments",
      "Creating products that are user-friendly, effective and appealing",
      "Digital retouching and image editing",
      "Creating logos and illustrations.",
    ],
  },
  {
    title: "Deputy Inspector (D/Insp.)",
    company_name: "Turkish Security Ministry of Interior",
    icon: egm,
    iconBg: "#E6DEDD",
    date: "Jun 2013 - Aug 2016",
    points: [
      "Detecting and investigating crime and prosecuting offenders during the initial investigation. Interviewing victims, witnesses, recording details, assessing the victims' need for protection and collecting physical evidence. ",
      "Conducted analysis for criminal operations research and assisted with communication to senior management in the utilization of these analyses.",
      "Prepared and presented routine and on-demand data-driven reports and visualizations to decision makers to overcome complicated problems and generate insightful reports.",
      "Handled multiple tasks and responsibilities independently as well as proactive team member/leader.",
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
    name: "Veraah Pet Store",
    description:
      "Mern Stack E-Commerce aplication that can effectively showcase the products and services offered by a fictional business, while providing a seamless and intuitive shopping experience for the end-users.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: veraah,
    source_code_link: "https://github.com/herrsaribas/pet-shop",
  },
  {
    name: "HafenX Digital.",
    description:
      "Responsive 3D portfolio site for a full-service marketing and design agency using React and Three.js that develops websites and online shops that convert visitors into customers and rank on page 1 of Google.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
    image: hafenx,
    source_code_link: "https://github.com/herrsaribas/agency-react-threejs",
  },
  {
    name: "Smartfarben E-Commerce",
    description:
      "I have builded and deployed a fully responsive Modern Full Stack Ecommerce application with Payments functionality. With Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: smartfarben,
    source_code_link:
      "https://github.com/herrsaribas/smartfarben-ecommerce-nextjs-sanity",
  },
];

export { services, technologies, experiences, testimonials, projects };

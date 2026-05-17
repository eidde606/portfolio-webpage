import landscaping from "./assets/images/AndreyPro.png";
import eddieanime2 from "./assets/images/eddieanime2.jpg";
import myreads from "./assets/images/myreads.jpeg";
import pelukita from "./assets/images/pelukita.png";
import pelukitas from "./assets/images/pelukitas.png";
import portfolio2 from "./assets/images/portfolio2.png";
import vacation from "./assets/images/vacation.png";

const logotext = "EN";
const meta = {
  title: "Eddie Nazario",
  description:
    "Java / Spring Boot Developer specializing in REST APIs, relational databases, and production-ready backend systems.",
};

const introdata = {
  title: "Hi, I'm Eddie Nazario",
  animated: {
    first: "Java / Spring Boot Developer",
    second: "Backend REST API Engineer",
    third: "Full-Stack System Builder",
  },
  description:
    "Full-Stack Software Engineer specializing in backend-driven systems architecture. I design and develop RESTful APIs with Java and Spring Boot, model relational databases with PostgreSQL, and deliver complete end-to-end solutions with React frontends — deployed to production on cloud platforms. Founder of NazbortTech LLC, delivering custom software solutions for real businesses.",
  your_img_url: eddieanime2,
};


const dataabout = {
  title: "Who am I?",
  aboutme: `I'm Eddie Nazario, a Java backend developer based in Hopewell, VA.

I specialize in building REST APIs using Spring Boot, Spring Data JPA/REST, and relational databases. My focus is backend architecture, entity relationships, and production-style deployments.

I build full-stack systems by connecting robust Java backends to Angular or React frontends, deploying them to cloud environments with live database integrations.

I’m bilingual (English/Spanish), detail-oriented, and focused on delivering systems that are structured, scalable, and production-ready.`,
};


const worktimeline = [
  {
    jobtitle: "Junior React Developer",
    where: "Vet Tech IT Services LLC",
    date: "Feb 2020 - May 2022 / Midlothian, VA",
  },
  {
    jobtitle: "Freelance React Developer",
    where: "Andrey's ProLandscaping & Tree Services LLC",
    date: "Aug 2023 - Jan 2024 / Midlothian, VA",
  },
  {
    jobtitle: "AI Chatbot Developer (Freelance)",
    where: "Pelukita’s Show",
    date: "Jul 2025 – Present / Hopewell, VA",
  },
];

const skills = [
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "REST APIs" },
  { name: "Spring Data JPA" },
  { name: "Hibernate" },
  { name: "SQL" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "Maven" },
  { name: "Git / GitHub" },
  { name: "Docker (Basic)" },

  { name: "Angular" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "JavaScript" }
];


const dataportfolio = [
  {
    img: pelukitas,
    description: "A full-stack web application built to streamline event bookings for a children’s party entertainment service. Users can schedule parties, choose packages, and submit event details, while the system manages bookings, updates pricing dynamically, and generates reports through a secure admin dashboard.",
    link: "https://pelukita-frontend.onrender.com/",
  },
  {
    img: myreads,

    description:
      "MyReads streamlines bookshelf management, allowing you to effortlessly categorize your reading list and access book details with ease. Stay organized and elevate your reading experience.",
    link: "https://golden-seahorse-850414.netlify.app/",
  },
  {
    img: portfolio2,
    description:
      "A personal web portfolio highlighting my journey as a Junior React Developer enthusiast. Discover projects, skills, and connect for potential collaborations.",
    link: "#",
  },
  {
    img: landscaping,
    description:
      "Explore the completed landscaping website, showcasing my dedication to exceptional outdoor solutions. This project is now actively used by a real landscaping company.",
    link: "https://jocular-melomakarona-435b13.netlify.app",
  },

 
  {
    img: pelukita,
    description:
      "An AI-powered Facebook Messenger chatbot built for a children's party entertainment business. The bot handles full event bookings in English or Spanish through natural conversation, confirms all details, and sends email confirmations using GPT-4 and MongoDB.",
    link: "https://m.me/pelukitasshow",
  },
  {
    img: vacation, 
    description:
    "Full-stack Vacation Planning system built with Spring Boot REST (Spring Data JPA/REST) and a relational database. Demonstrates entity relationships, CRUD operations, and live cloud deployment with a connected production database.",
    link: "https://vacationplanning.netlify.app",
  },
  
];

const contactConfig = {
  YOUR_EMAIL: "eiddenazario@gmail.com",
  description: "Looking forward to hearing from you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_8wjkn4p",
  YOUR_TEMPLATE_ID: "template_7cxv7i9",
  YOUR_USER_ID: "IJlyxBIWWLdS2KCZR",
};

const socialprofils = {
  github: "https://github.com/eidde606?tab=repositories",
  linkedin: "https://www.linkedin.com/in/eddie-nazario-20b2a320a/",
};
export {
  contactConfig,
  dataabout,
  dataportfolio,
  introdata,
  logotext,
  meta,
  skills,
  socialprofils,
  worktimeline
};


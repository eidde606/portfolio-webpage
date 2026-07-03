import landscaping from "./assets/images/AndreyPro.png";
import eddieanime2 from "./assets/images/eddieanime2.jpg";
import myreads from "./assets/images/myreads.jpeg";
import nazbort from "./assets/images/nazbort.png";
import pelukitas from "./assets/images/pelukitas.png";

const logotext = "EN";

const meta = {
  title: "Eddie Nazario",
  description:
    "Software Engineer specializing in Java, Spring Boot, REST APIs, PostgreSQL, React, AI integrations, and cloud-deployed full-stack applications.",
};

const introdata = {
  title: "Hi, I'm Eddie Nazario",
  animated: {
    first: "Java Backend Developer",
    second: "Spring Boot REST API Engineer",
    third: "Full-Stack Software Engineer",
  },
  description:
    "Software Engineer specializing in Java, Spring Boot, REST APIs, PostgreSQL, React, and cloud deployment. I build production-style business applications with secure payment integrations, automated email workflows, AI-powered assistants, and admin dashboards. Founder of NazbortTech LLC, delivering real-world software solutions for businesses.",
  your_img_url: eddieanime2,
};

const dataabout = {
  title: "Who am I?",
  aboutme: `I'm Eddie Nazario, a Software Engineer based in Hopewell, Virginia.

I specialize in building backend-driven full-stack applications using Java, Spring Boot, Spring Data JPA, REST APIs, PostgreSQL, and React.

My work includes production-style booking systems, payment integrations with Stripe, automated email workflows with Brevo, AI-powered assistants using OpenAI APIs, and cloud deployments through Render and Netlify.

I hold a Bachelor of Science in Software Engineering from Western Governors University and an AAS in Information Technology from Brightpoint Community College.

I'm bilingual in English and Spanish, detail-oriented, and focused on building clean, scalable software that solves real business problems.`,
};

const worktimeline = [
  {
    jobtitle: "Software Engineer",
    where: "Freelance / NazbortTech LLC",
    date: "Apr 2026 - Present / Hopewell, VA",
  },
  {
    jobtitle: "Software Engineer",
    where: "Pelukita's Show",
    date: "Jul 2025 - Feb 2026 / Hopewell, VA",
  },
  {
    jobtitle: "City Mail Carrier",
    where: "United States Postal Service",
    date: "Jul 2017 - Present / Hopewell, VA",
  },
];

const skills = [
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "REST APIs" },
  { name: "Spring Data JPA" },
  { name: "Hibernate" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "SQL" },
  { name: "MVC Architecture" },
  { name: "OOP" },
  { name: "Maven" },
  { name: "Docker" },
  { name: "Git / GitHub" },
  { name: "GitLab" },
  { name: "React" },
  { name: "Angular" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "HTML5" },
  { name: "CSS" },
  { name: "OpenAI API" },
  { name: "Stripe API" },
  { name: "Brevo API" },
  { name: "MongoDB" },
  { name: "Render" },
  { name: "Netlify" },
];

const dataportfolio = [
  {
    img: pelukitas,
    description:
      "Production-style full-stack booking platform built with React, Spring Boot, PostgreSQL, and Stripe. Features real-time availability logic, secure 50% deposit payments, automated receipts, Spanish contract generation, admin booking management, revenue reporting, and cloud deployment with Render and Netlify.",
    link: "https://pelukita-frontend.onrender.com/",
  },

  {
    img: myreads,
    description:
      "React application that integrates with a REST API to organize books into custom reading shelves. Demonstrates component-based UI development, state management, asynchronous API communication, and clean frontend architecture.",
    link: "https://golden-seahorse-850414.netlify.app/",
  },
  {
    img: landscaping,
    description:
      "Responsive business website developed for a real landscaping company. Features service information, professional branding, mobile-friendly design, contact functionality, and production deployment for an active client.",
    link: "https://jocular-melomakarona-435b13.netlify.app",
  },
  {
    img: nazbort,
    description:
      "Official website for Nazbort Tech LLC, my software development business. Built with React to showcase custom software solutions including AI-powered assistants, booking systems, business websites, automation tools, payment integrations, and administrative dashboards. Features responsive design, lead generation, and a production deployment serving real clients.",
    link: "https://nazborttech.com/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "eiddenazario@gmail.com",
  description:
    "Interested in working together or discussing a software engineering opportunity? Send me a message.",
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
  worktimeline,
};

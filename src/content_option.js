import eddieanime2 from "./assets/images/eddieanime2.jpg";
import landscaping from "./assets/images/landscaping.png";
import myreads from "./assets/images/myreads.jpeg";
import portfolio2 from "./assets/images/portfolio2.png";

const logotext = "EN";
const meta = {
  title: "Eddie Nazario",
  description:
    "I'm Eddie Nazario, a Junior React Developer and Flutter Developer enthusiast.",
};

const introdata = {
  title: "Hi, I'm Eddie Nazario",
  animated: {
    first: "Front-End React Developer",
    second: "Flutter Developer",

    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "Passionate about crafting seamless user experiences through React development and Flutter.",
  your_img_url: eddieanime2,
};

const dataabout = {
  title: "Who am I?",
  aboutme:
    "I'm Eddie Nazario, a Junior React Developer based in Hopewell, VA. With a strong background in Information Technology and a foundation in Respiratory Therapy, I bring a unique blend of skills and adaptability to web development." +
    "I've honed my development expertise at Vet Tech IT Services LLC, collaborating in agile environments and achieving a 95% bug resolution rate." +
    " Proficient in React, JavaScript, CSS, HTML5, Flutter, Bootstrap, ChakraUI, and Github. I'm passionate about creating user-friendly web applications and continually expanding my skill set. Fluent in both English and Spanish, I thrive in diverse communication settings." +
    "Let's connect and explore exciting web development opportunities together!",
};
const worktimeline = [
  {
    jobtitle: "Junior React Developer (Volunteer)",
    where: "Vet Tech IT Services LLC",
    date: "Feb 2020 - May 2022 / Midlothian, VA",
  },
];

const skills = [
  {
    name: "JavaScript",
  },

  {
    name: "React",
  },
  {
    name: "Flutter",
  },
  {
    name: "BootStrap",
  },
  {
    name: "ChakraUI",
  },
  {
    name: "Github",
  },
  {
    name: "HTML5",
  },
];

const dataportfolio = [
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
      "Greetings! Join us on our journey to enhance outdoor spaces. This evolving website reflects our dedication to exceptional landscaping solutions. Please note that it is a work in progress and not yet complete.",
    link: "https://jocular-melomakarona-435b13.netlify.app",
  },
];

const contactConfig = {
  YOUR_EMAIL: "eiddenazario@gmail.com",
  description: "Looking forward to hearing from you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_8wjkn4p",
  YOUR_TEMPLATE_ID: "template_7cxv7i9",
  YOUR_USER_ID: "-N8AEob4bCojrOdby",
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

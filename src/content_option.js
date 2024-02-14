import landscaping from "./assets/images/AndreyPro.png";
import eddieanime2 from "./assets/images/eddieanime2.jpg";
import gameHub from "./assets/images/gameHub.png";
import myreads from "./assets/images/myreads.jpeg";
import portfolio2 from "./assets/images/portfolio2.png";
import todoList from "./assets/images/todoList.png";

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
    second: "React Native Developer",

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
    "I've honed my development expertise at Vet Tech IT Services LLC, collaborating in agile environments." +
    " Proficient in React, JavaScript, CSS, HTML5, Flutter, Bootstrap, ChakraUI, and Github. I'm passionate about creating user-friendly web applications and continually expanding my skill set. Fluent in both English and Spanish, I thrive in diverse communication settings." +
    "Let's connect and explore exciting web development opportunities together!",
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
  {
    name: "NextJS",
  },
  {
    name: "Typescript",
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
      "Explore the completed landscaping website, showcasing my dedication to exceptional outdoor solutions. This project is now actively used by a real landscaping company.",
    link: "https://jocular-melomakarona-435b13.netlify.app",
  },
  {
    img: gameHub,
    description:
      "Created a responsive game catalog website with React.js and Chakra UI. Users can explore games by genre, highlighting expertise in responsive design and UI development, perfect for a web developer's portfolio.",
    link: "https://papaya-hamster-1f1519.netlify.app",
  },
  {
    img: todoList,
    description:
      "I built TodoList, a full-stack task management app with React and Material-UI. Users can add, edit, and delete tasks, with a responsive design for seamless usage. The app interacts with my Heroku-deployed backend, featuring MongoDB for data storage.",
    link: "https://todolistfrontend-e161200f9920.herokuapp.com/",
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
  worktimeline,
};

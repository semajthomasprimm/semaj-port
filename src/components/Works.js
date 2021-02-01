import React from "react";
import SingleWorkLeft from "./SingleWorkLeft";
import SingleWorkRight from "./SingleWorkRight";
import pernTodoImg from "../assets/pern-todo.png";
import utmImg from "../assets/utm1.png";
import wardtoImg from "../assets/wardto.png";
import blackjackImg from "../assets/blackjack.png";

const projectData1 = {
  type: "Group Project",
  title: "WardTO",
  description:
    "Competed in HackTheNorth in a team of four. A web app that provides information about shelters in Toronto using data from the City of Toronto. Worked on backend of project and hosting it using Firebase Hosting.",
  featuresCol1: ["Embedded Google Map"],
  featuresCol2: ["Shelter Listings"],
  techStack: "HTML, CSS, Javascript, Google Maps API, Firebase",
  link: "http://wardto.tech",
  repo: "https://github.com/semajthomasprimm/hackthenorth",
  previewImg: wardtoImg,
};

const projectData2 = {
  type: "Featured Project",
  title: "PERN Todo List App",
  description:
    "Developed a todo list web app using the PERN(Postgresql, Express, React, NodeJS) stack. ",
  featuresCol1: ["Add items", "Edit items", "Delete items"],
  featuresCol2: [
    "CRUD features using API routes",
    "Connected to live database",
    "Displays all todo items",
  ],
  techStack: "ReactJS, Bootstrap 4, Express, PostgreSQL, Heroku, Git",
  link: "https://pern-todo-primm.herokuapp.com/",
  repo: "https://github.com/semajthomasprimm/PERN-TODO-heroku",
  previewImg: pernTodoImg,
};

const projectData3 = {
  type: "Group Project",
  title: "Psychedelic Studies Research at U of T",
  description:
    "I worked with Professor Norman Farb of the Psychology department to migrate the Psychedelic Studies Research Program(PSRP) from an external site into the existing University system.",
  featuresCol1: ["Provides background information about the research facility"],
  featuresCol2: [
    "Hosts articles and press releases about the facility and staff",
  ],
  techStack: "Drupal, HTML, CSS, Photoshop",
  link:
    "https://www.utm.utoronto.ca/psychedelics/welcome-psychedelic-studies-research-program-utm",
  previewImg: utmImg,
};

const projectData4 = {
  type: "Group Project",
  title: "Blackjack",
  description:
    "Worked in team of 3 to develop a console version of Blackjack during a semester. We refactored the code to utilize eloquent coding patterns. In addtion to developing the project, I managed the project presentation and documentation.",
  featuresCol1: ["Interactive Console Game", "Error Handling"],
  featuresCol2: ["JUnit testing"],
  techStack: "Java, Git, Visual Paradigm",
  repo: "https://github.com/smitniko/Group5_BlackJack",
  previewImg: blackjackImg,
};

const Works = () => {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center py-8">
          <h1 className="text-4xl font-semibold text-white">
            Featured Projects
          </h1>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-800">
          <SingleWorkLeft projectData={projectData1} />

          <SingleWorkRight projectData={projectData2} />

          <SingleWorkLeft projectData={projectData3} />

          <SingleWorkRight projectData={projectData4} />
        </div>
      </div>
    </section>
  );
};

export default Works;

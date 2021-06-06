import React from "react";
import SingleWorkLeft from "./SingleWorkLeft";
import SingleWorkRight from "./SingleWorkRight";
import utmImg from "../assets/utm1.png";
import blackjackImg from "../assets/blackjack.png";
import cryptodashboard from '../assets/cryptodashboard.png';
import covid19dashboard from '../assets/covid19dashboard.png';

const projectData1 = {
  type: "Personal Project",
  title: "COVID-19 Dashboard",
  description:
    "A COVID-19 cases tracker for Canada. Includes charts displaying daily statistics of cases, deaths, tests, and vaccinations for Canada, provinces and territories.",
  featuresCol1: ["Cumulative and daily counts of cases, deaths, tests, and vaccinations in Canada.",  "Select region-specific data to display in a graph"],
  featuresCol2: ["Responsive design", "Receives up-to-date data via API"],
  techStack: "ReactJS, Bootstrap, SWR, react-select, Recharts, react-router Netlify, Git",
  link: "https://covid19-canada-dashboard.netlify.app/",
  repo: "https://github.com/semajthomasprimm/covid19-canada-dashboard",
  previewImg: covid19dashboard,
};

const projectData2 = {
  type: "Personal Project",
  title: "Cryptocurrency Dashboard",
  description:
    "A price tracker for top 100 cryptocurrencies based on CoinGecko.",
  featuresCol1: ["Live price changes", "Currency switching"],
  featuresCol2: ["Dark and light mode", "Responsive design"],
  techStack: "ReactJS, Bootstrap, SWR, react-select, local-storage-fallback, Netlify, Git",
  link: "https://cryptodashboardsprimm.netlify.app/",
  repo: "https://github.com/semajthomasprimm/crypto-dashboard",
  previewImg: cryptodashboard,
};

const projectData3 = {
  type: "Group Project",
  title: "Psychedelic Studies Research at U of T",
  description:
    "I worked with Professor Norman Farb of the Psychology department to migrate the Psychedelic Studies Research Program(PSRP) from an external site into the existing University system.",
  featuresCol1: ["Provides background information about the research facility"],
  featuresCol2: ["Hosts articles and press releases about the facility and staff"],
  techStack: "Drupal, HTML, CSS, Photoshop",
  link: "https://www.utm.utoronto.ca/psychedelics/welcome-psychedelic-studies-research-program-utm",
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

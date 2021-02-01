import React from "react";
import SingleProject from './AccordionItem';

const OtherWorks = () => {
  return (
    <section id="" className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center py-16">
          <h1 className="text-4xl font-semibold">Other Projects</h1>
        </div>
        <SingleProject 
            title="sheet2Timetable" 
            date="January 2021" 
            techUsed="Google Apps Script, Google Calendar API" 
            description="A simple script that converts course details from a Google Sheet to a calendar." 
            repoLink="http://github.com/semajthomasprimm"
        />
        <SingleProject 
          title="Pearly - UI Library" 
          date="September 2020-Current" 
          techUsed="ReactJS, TailwindCSS" 
          description="Developing a library of UI components built with ReactJS and TailwindCSS" 
          repoLink="https://github.com/semajthomasprimm/pearly"
          websiteLink="https://pearlylibrary.herokuapp.com"
        />
        <SingleProject 
          title="Regulatory and Affective Dynamics Lab U of T" 
          date="May-August 2019" 
          techUsed="Drupal, HTML, CSS, Photoshop, Website Migration" 
          description="I worked with Professor Norman Farb of the Psychology department to develop a website for the RADLab within the University system." 
          websiteLink="https://www.utm.utoronto.ca/farb-lab/welcome-regulatory-and-affective-dynamics-rad-lab-utm"
        />
        <SingleProject 
            title="Airy Area Code Finder" 
            date="November 2014" 
            techUsed="Android SDK, Java, XML" 
            description="An Android application that finds an area code location or city/state/province/country area code" 
            websiteLink="https://play.google.com/store/apps/details?id=com.airyapp.retrospectstudios.airy&hl=en_CA&gl=US"
        />
      </div>
    </section>
  );
};

export default OtherWorks;

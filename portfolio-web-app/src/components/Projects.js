import React from "react";
import Cards from "./Cards";

const Projects = () => (
  <section id="projects" className="projects-container">
    <h2>PROJECTS</h2>
    <div className="projects-grid">
      <Cards
        title="REST Countries API with color theme switcher"
        description="A brief description of Project 1. It involves using HTML, CSS, and JavaScript to create a responsive web page."
        technologies={["HTML", "CSS", "JavaScript"]}
        liveUrl="https://countryapidemo.netlify.app"
        githubUrl="https://github.com/AniketShewale266/REST_Countries_API-/tree/main/rest-countries-api-with-color-theme-switcher-master/Project"
      />

      <Cards
        title="Rock Paper Scissor Game."
        description="Developed an engaging Rock-Paper-Scissors game using Core Java, Swing, and Socket
        IO. The game features a user-friendly interface and multiplayer functionality, allowing users to play against friends."
        technologies={["Core Java", "Java Swing", "Socket IO"]}
        liveUrl="#"
        githubUrl="https://github.com/AniketShewale266/Rock_Paper_Scissor_Project_New"
      />

      <Cards
        title="Expense Tracker Web app"
        description="The Expense Tracker Web App is a simple and intuitive application designed to help users manage their finances effectively."
        technologies={["HTML", "CSS", "JavaScript", "React"]}
        liveUrl="https://expensetrackerbyaniketshewale.netlify.app"
        githubUrl="https://github.com/AniketShewale266/CentraLogic-Assignment-React/tree/main/expense-tracker-app"
      />

      <Cards
        title="Text Utils"
        description="Developed TextUtils, a responsive web application using ReactJS, aimed at streamlining text-related tasks for enhanced user efficiency. "
        technologies={["HTML", "CSS", "JavaScript", "React"]}
        liveUrl="https://text-utilswebapp.netlify.app"
        githubUrl="https://github.com/AniketShewale266/text-utils"
      />
    </div>
  </section>
);

export default Projects;

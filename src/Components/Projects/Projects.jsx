import React, { useState } from "react";
import "./Projects.css";
import p1_Image from '../Assets/P1_project.png';
import p2_Image from '../Assets/P2_project.png';
import p3_Image from '../Assets/P3_project.png';
import p4_Image from '../Assets/P4_project.png';

const projects = [
  {
    id: 1,
    title: "Recipe Book Website",
    description: "A frontend built using React.js to display recipes dynamically.",
    details: " The website fetches both local and API-based recipe data, displays them in a clean and visually appealing layout, and enables users to search for recipes and explore each recipe's details through a detailed page view.",
    image: p1_Image,
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A responsive shopping platform built with React.js.",
    details: "This project showcases responsive design techniques. With features like product zoom-in, dynamic product display, an interactive cart system, total price calculation, loading spinner, and more, it provides a smooth and user-friendly shopping experience.",
    image: p2_Image,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "The Weather Dashboard is an interactive web application designed to provide users with real-time weather information for any city they search for.",
    details: "Users can view current temperature, weather conditions, and the local time of the selected city, all presented in a visually appealing interface.",
    image: p3_Image,
  },
  {
    id: 4,
    title: "Medical Store",
    description: "A Medical Store Management System for Pharmacy built with Python and Mysql, it has responsive design.",
    details: "This project have features like displaying medicine list, adding new medicine, removing existing medicine, updating existing medicine, bill calculation and generating billing information. Also users can search for medicine and it displays message if medicine not found.",
    image: p4_Image,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAsteroidClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      {!selectedProject ? (
        <>
          <h1 className="projects-heading">Projects Asteroid Belt</h1>
          <div className="asteroid-belt">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`asteroid asteroid-${index + 1}`}
                onClick={() => handleAsteroidClick(project)}
                title={project.title}
              >
                <div className="asteroid-content">
                  <h2>{project.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="project-details">
          <h1>{selectedProject.title}</h1>
          <img
            src={selectedProject.image}
            alt={`${selectedProject.title} screenshot`}
            className="project-image"
          />
          <p>{selectedProject.description}</p>
          <p>{selectedProject.details}</p>
          <button onClick={handleBackClick} className="back-btn">
            Back To Projects Asteroid Belt
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;

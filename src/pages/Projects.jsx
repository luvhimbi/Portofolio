import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Project One",
    description: "Description for Project One. Technologies: React, Node.js",
    image: "/assets/project1.jpg", // Place your image in public/assets or src/assets
  },
  {
    title: "Project Two",
    description: "Description for Project Two. Technologies: Vue, Firebase",
    image: "/assets/project2.jpg",
  },
  {
    title: "Project Three",
    description: "Description for Project Three. Technologies: Python, Django",
    image: "/assets/project3.jpg",
  },
];

function Projects() {
  return (
    <div>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <Card key={idx} title={project.title} image={project.image}>
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

import React from "react";
import { AnimatedTitle } from "./AnimatedTitle";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive web app for managing tasks and projects",
      technologies: ["Vue.js", "Firebase", "Vuex"],
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets",
      technologies: ["D3.js", "React", "Python", "Flask"],
    },

    {
      id: 4,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A responsive web app for managing tasks and projects",
      technologies: ["Vue.js", "Firebase", "Vuex"],
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets",
      technologies: ["D3.js", "React", "Python", "Flask"],
    },
    {
      id: 7,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 8,
      title: "Task Management App",
      description: "A responsive web app for managing tasks and projects",
      technologies: ["Vue.js", "Firebase", "Vuex"],
    },
    {
      id: 9,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets",
      technologies: ["D3.js", "React", "Python", "Flask"],
    },
  ];

  return (
    <div className="container mx-auto pt-4 lg:px-24">
      <AnimatedTitle text="Projects" />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className=" mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

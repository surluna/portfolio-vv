import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "E-commerce platform",
    description: "An eco-friendly online shopping website",
    image: "/images/projects/GreenShell.png",
    gitUrl: "https://github.com/surluna/GreenShell",
    previewUrl: "https://green-shell.vercel.app/",
  },
  {
    id: 2,
    title: "DailyNote",
    description:
      "A full-stack note-taking application using node.js, express, and mongoDB",
    image: "/images/projects/DailyNote.png",
    gitUrl: "https://github.com/surluna/app",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <li key={index}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

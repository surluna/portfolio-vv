import React, { useRef, useState, useEffect } from "react";
import { Typography } from "antd";
import ProjectCard from "./ProjectCard";
import "../../styles/input.css";
import "../../styles/output.css";
import "tailwindcss/tailwind.css";
const { Title } = Typography;
const projectsData = [
  {
    id: 1,
    title: "AutoJob",
    description:
      "A career website that streamlines the job search process in Australia. Built with React and Ant Design for the front end, allows users to filter opportunities and subscribe to email alerts.",
    image: "/assets/images/AutoJob.png",
    gitUrl: "https://github.com/AutoJob-24S1",
    previewUrl: "https://autojob.one/",
  },
  {
    id: 2,
    title: "GreenShell",
    description:
      "A UI design project showcasing a visually appealing interface for an eco-friendly product line. This project focuses on aesthetic and user experience elements, highlighting design principles.",
    image: "/assets/images/GreenShell.png",
    gitUrl: "https://github.com/surluna/GreenShell",
    previewUrl: "https://green-shell.vercel.app/",
  },
  {
    id: 3,
    title: "DailyNote",
    description:
      "A full-stack note-taking application that helps users jot down their thoughts and tasks effortlessly. Constructed with Node.js and Express for the backend, utilizing MongoDB for data persistence.",
    image: "/assets/images/DailyNote.png",
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
    <section id="projects" style={{ marginBottom: "5rem", padding: "4rem" }}>
      <Title
        className="text-start text-3xl font-bold mt-4 mb-8 md:mb-12"
        style={{ marginBottom: "4rem" }}
      >
        My Projects
      </Title>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <li key={index}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="w-2"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

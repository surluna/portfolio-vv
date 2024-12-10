import React, { useRef, useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import ProjectCard from "./ProjectCard";
import "../../styles/input.css";
import "../../styles/output.css";
import "tailwindcss/tailwind.css";
import projectsData from "../../data/projectsData.json";
const { Title } = Typography;

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
    <section
      id="projects"
      style={{ marginBottom: "5rem", padding: "4rem 4rem" }}
    >
      <Title
        className="text-start text-3xl font-bold mt-4 mb-8 md:mb-12"
        style={{ marginBottom: "4rem" }}
      >
        My Projects
      </Title>
      <Row ref={ref} gutter={[48, 48]}>
        {projectsData.map((project, index) => (
          <Col key={project.id} xs={24} md={12}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="w-2"
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProjectsSection;

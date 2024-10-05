import React from "react";
import { Popover, Steps, Typography } from "antd";
import "../styles/input.css";
import "../styles/output.css";
import "../styles/index.css";
const { Title } = Typography;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Skill {index + 1} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const Skills = () => {
  const description = "";

  return (
    <div style={{ textAlign: "left", padding: "4rem" }}>
      <Title className="text-start text-3xl font-bold mt-4 mb-8 md:mb-12">
        What I can do
      </Title>
      {/* UI/UX Design Skills */}
      <div style={{ padding: "5rem 15rem", marginTop: "3rem" }}>
        <Steps
          current={4}
          progressDot={customDot}
          direction="horizontal"
          items={[
            {
              title: "PHOTOSHOP",
              description,
            },
            {
              title: "FIGMA",
              description,
            },
            {
              title: "HTML",
              description,
            },
            {
              title: "CSS",
              description,
            },
            {
              title: "ANT DESIGN",
              description,
            },
          ]}
        />
        <Title level={3} style={{ marginTop: "4rem", textAlign: "center" }}>
          UI/UX DESIGN
        </Title>
      </div>
      {/* Full Stack Skills */}
      <div style={{ padding: "5rem 15rem" }}>
        <Steps
          current={5}
          progressDot={customDot}
          direction="horizontal"
          items={[
            {
              title: "GIT",
            },
            {
              title: "JAVASCRIPT",
            },
            {
              title: "REACT",
            },

            {
              title: "NODE.JS",
            },
            { title: "EXPRESS" },
            {
              title: "MONGODB",
            },
          ]}
        />
        <Title level={3} style={{ marginTop: "4rem", textAlign: "center" }}>
          WEBSITE DEVELOPMENT
        </Title>
      </div>
      <div style={{ padding: "5rem 15rem" }}>
        <Steps
          current={4}
          progressDot={customDot}
          direction="horizontal"
          items={[
            {
              title: "JAVA",
            },
            {
              title: "ANDROID STUDIO",
            },
            { title: "PYTHON" },
            { title: "MYSQL" },
          ]}
        />
        <Title level={3} style={{ marginTop: "4rem", textAlign: "center" }}>
          BACKEND DEVELOPMENT
        </Title>
      </div>
    </div>
  );
};

export default Skills;

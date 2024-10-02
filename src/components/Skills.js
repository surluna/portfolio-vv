import React from "react";
import { Popover, Steps, Typography } from "antd";

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
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Title level={2}>What I can do</Title>

      {/* UI/UX Design Skills */}
      <div style={{ margin: "50px 0" }}>
        <Steps
          current={1}
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
              title: "JAVASCRIPT",
              description,
            },
          ]}
        />
        <Title level={3} style={{ marginTop: "30px" }}>
          UI/UX DESIGN
        </Title>
      </div>

      {/* Full Stack Skills */}
      <div style={{ margin: "50px 0" }}>
        <Steps
          current={1}
          progressDot={customDot}
          direction="horizontal"
          items={[
            {
              title: "REACT",
              description,
            },
            {
              title: "NODE.JS",
              description,
            },
            {
              title: "MONGODB",
              description,
            },
          ]}
        />
        <Title level={3} style={{ marginTop: "30px" }}>
          FULL STACK
        </Title>
      </div>
    </div>
  );
};

export default Skills;

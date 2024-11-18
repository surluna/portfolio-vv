import React from "react";
import { Popover, Steps, Typography, Row, Col } from "antd";
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
      <Row
        style={{
          padding: "5rem 0",
          marginTop: "3rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Col xs={24} sm={16}>
          <Steps
            current={4}
            progressDot={customDot}
            direction="horizontal"
            items={[
              { title: "CANVA", description },
              { title: "FIGMA", description },
              { title: "HTML", description },
              { title: "TAILWIND CSS", description },
              { title: "ANT DESIGN", description },
            ]}
          />
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Title
            level={3}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              margin: "0 auto", // Center horizontally
            }}
          >
            UI/UX DESIGN
          </Title>
        </Col>
      </Row>

      {/* Full Stack Skills */}
      <Row
        style={{
          padding: "5rem 0",
          marginTop: "2rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Col xs={24} sm={16}>
          <Steps
            current={5}
            progressDot={customDot}
            direction="horizontal"
            items={[
              { title: "JAVASCRIPT" },
              { title: "REACT" },
              { title: "NEXT.JS" },
              { title: "NODE.JS" },
              { title: "MONGODB" },
            ]}
          />
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Title
            level={3}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              margin: "0 auto", // Center horizontally
            }}
          >
            WEBSITE DEVELOPMENT
          </Title>
        </Col>
      </Row>

      {/* Backend Development Skills */}
      <Row
        style={{
          padding: "5rem 0",
          marginTop: "2rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Col xs={24} sm={16}>
          <Steps
            current={4}
            progressDot={customDot}
            direction="horizontal"
            items={[
              { title: "GIT" },
              { title: "JAVA" },
              { title: "ANDROID STUDIO" },
              { title: "PYTHON" },
              { title: "MYSQL" },
            ]}
          />
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Title
            level={3}
            className="md:mt-1"
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              margin: "0 auto",
            }}
          >
            BACKEND DEVELOPMENT
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;

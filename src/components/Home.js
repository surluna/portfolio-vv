import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Typography, Button, Space } from "antd";
import { TypeAnimation } from "react-type-animation";
import "../styles/input.css";
import "../styles/output.css";
import "../styles/index.css";

const { Title, Text } = Typography;
const { Content } = Layout;

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Content
      className="p-4"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "2rem" : "8rem",
      }}
    >
      <Row justify="space-between" align="middle" style={{ width: "100%" }}>
        <Col
          xs={24}
          md={16}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div style={{ flex: 6, marginBottom: isMobile ? "2rem" : "4.5rem" }}>
            <Title
              level={2}
              style={{
                fontSize: isMobile ? "2rem" : "4rem",
              }}
            >
              Hi, I am{" "}
              <span
                style={{
                  fontSize: isMobile ? "3rem" : "5rem",
                  background: "linear-gradient(60deg, white 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Vivien Wee
              </span>
            </Title>

            <Title
              level={3}
              style={{
                marginBottom: "3.5rem",
                fontSize: isMobile ? "2.5rem" : "4rem",
                marginTop: "0",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Data Analyst",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Title>
            <Text style={{ fontSize: isMobile ? "1rem" : "1.4rem" }}>
              Welcome to my portfolio, please feel free to explore.
            </Text>
          </div>

          <div style={{ flex: 2 }}>
            <Row gutter={16}>
              <Space size={"large"}>
                <Button
                  size="large"
                  style={{
                    padding: "1rem",
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    width: "200%",
                  }}
                  onClick={() => window.open("/assets/Resume.pdf", "_blank")}
                >
                  View My Resume
                </Button>
              </Space>
            </Row>
          </div>
        </Col>

        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <img
            src="/assets/images/pic.jpg"
            alt="Vivien Wee"
            style={{
              maxWidth: isMobile ? "80%" : "100%",
              borderRadius: "50%",
            }}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default App;

import React from "react";
import "../styles/index.css";
import { Layout, Row, Col, Typography, Button, Space } from "antd";
import { TypeAnimation } from "react-type-animation";
const { Title, Text } = Typography;
const { Content } = Layout;

const App = () => {
  return (
    <Content
      className="home"
      style={{
        // backgroundColor: "#f0f2f5",
        // backgroundImage: "url(/assets/images/bg.jpg)",
        padding: "8rem",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
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
          <div style={{ flex: 6, marginBottom: "6rem" }}>
            <Title
              level={2}
              style={{
                fontSize: "4rem",
              }}
            >
              Hi, I am <span style={{ fontSize: "5rem" }}>Vivien Wee</span>
            </Title>

            <Title
              level={3}
              style={{
                marginBottom: "3.5rem",
                fontSize: "4rem",
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
            <Text style={{ fontSize: "1.4rem" }}>
              Welcome to my profolio, please feel free to explore.
            </Text>
          </div>

          <div style={{ flex: 2 }}>
            <Row gutter={16}>
              <Space size={"large"}>
                <Button
                  type="primary"
                  size="large"
                  style={{ padding: "1.5rem", fontSize: "1.2rem" }}
                >
                  Let’s Start
                </Button>
                <Button
                  size="large"
                  style={{ padding: "1.5rem", fontSize: "1.2rem" }}
                >
                  My Resume
                </Button>
              </Space>
            </Row>
          </div>
        </Col>

        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <img
            src="/assets/images/pic.jpg"
            alt="Vivien Wee"
            style={{ width: "150%", maxWidth: "450px", borderRadius: "50%" }}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default App;

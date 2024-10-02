import React from "react";
import { Layout, Typography, Button, Row, Col } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  return (
    <Content
      style={{
        backgroundColor: "#f0f2f5",
        padding: "50px",
        textAlign: "start",
      }}
    >
      <Row justify="start" align="middle">
        <Col span={12}>
          <div style={{ padding: "20px" }}>
            <Title level={2}>Hi, I am</Title>
            <Title level={1}>Vivien Wee</Title>
            <Title level={3}>Full Stack Developer</Title>
            <Text>
              Passionate about building web applications and user-friendly
              interfaces.
            </Text>
            <div style={{ marginTop: "20px" }}>
              <Button
                type="primary"
                size="large"
                style={{ marginRight: "20px" }}
              >
                Let’s Start
              </Button>
              <Button
                size="large"
                style={{ backgroundColor: "#d9d9d9", border: "none" }}
              >
                My Resume
              </Button>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <img
              src="your-image-path-here.jpg"
              alt="Vivien Wee"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;

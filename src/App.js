import React, { useState, useRef } from "react";
import "antd/dist/reset.css";
import "./styles/App.css";
import "./styles/input.css";
import "./styles/output.css";
import "./styles/index.css";
import "tailwindcss/tailwind.css";
import { Layout, ConfigProvider, theme } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Project/ProjectsSection";
import Contact from "./components/Contact";

const defaultData = {
  borderRadius: 6,
};

const { Content } = Layout;

function App() {
  const [data, setData] = useState(defaultData);

  // 创建refs以获取各个部分的引用
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "rgb(211, 210, 219)",
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Layout
        style={{
          backgroundImage:
            "linear-gradient(60deg, #29323c 0%, rgb(15, 15, 15) 100%)",
        }}
      >
        <Header
          homeRef={homeRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Content style={{ padding: "50px" }}>
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;

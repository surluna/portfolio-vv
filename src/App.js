import React, { useState, useRef, useEffect } from "react";
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
  const [visibleSections, setVisibleSections] = useState({
    home: false,
    skills: false,
    projects: false,
    contact: false,
  });

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, options);

    const sections = [homeRef, skillsRef, projectsRef, contactRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const downloadResume = () => {
    window.open("/assets/Resume.pdf", "_blank");
  };

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
            "linear-gradient(60deg, rgb(90,52,125) 0%, rgb(15, 15, 15) 100%)",
        }}
      >
        <Header
          homeRef={homeRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Content style={{ padding: "50px" }}>
          <div
            ref={homeRef}
            id="home"
            className={`fade-in ${visibleSections.home ? "visible" : ""}`}
          >
            <Home />
          </div>
          <div
            ref={skillsRef}
            id="skills"
            className={`fade-in ${visibleSections.skills ? "visible" : ""}`}
          >
            <Skills />
          </div>
          <div
            ref={projectsRef}
            id="projects"
            className={`fade-in ${visibleSections.projects ? "visible" : ""}`}
          >
            <Projects />
          </div>
          <div
            ref={contactRef}
            id="contact"
            className={`fade-in ${visibleSections.contact ? "visible" : ""}`}
          >
            <Contact />
          </div>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;

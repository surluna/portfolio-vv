import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Project/ProjectsSection";
import Contact from "./components/Contact";

const { Content } = Layout;
function App() {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "50px" }}>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;

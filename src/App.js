import React, { useState } from "react";
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
  // colorPrimary: "rgb(15, 15, 15)",
  // colorPrimaryBg: "blue",
};

const { Content } = Layout;

function App() {
  // `useState` 应该在函数组件内部
  const [data, setData] = useState(defaultData);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "rgb(211, 210, 219)",
          // colorPrimaryBg: "#130f40",
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Layout
        style={{
          // backgroundImage: " linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
          // backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
          backgroundImage:
            "linear-gradient(60deg, #29323c 0%, rgb(15, 15, 15) 100%)",

          // background:
          //   "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
          // backgroundBlendMode: "multiply",
        }}
      >
        <Header />
        <Content
          style={{
            padding: "50px",
            // backgroundImage: "url(/assets/images/bg.jpg)",
          }}
        >
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;

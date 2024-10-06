import React from "react";
import { Layout, Menu } from "antd";

const { Header: AntHeader } = Layout;

const Header = ({ homeRef, skillsRef, projectsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AntHeader
      style={{
        display: "flex",
        position: "fixed",
        alignItems: "center",
        backgroundColor: "rgb(15, 15, 15)",
        height: "4rem",
        width: "100%",
        boxShadow:
          "0 4px 8px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(255, 255, 255, 0.1)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          flex: 1,
          marginLeft: "1rem",
          fontWeight: "600",
          fontSize: "150%",
          letterSpacing: "0.05em",
          color: "#fff",
          userSelect: "none",
        }}
      >
        My Portfolio
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          fontSize: "18px",
          backgroundColor: "rgb(15, 15, 15)",
          marginRight: "1rem",
          lineHeight: "46px",
        }}
      >
        <Menu.Item
          key="1"
          style={{ color: "#fff", fontWeight: "500", marginRight: "1.5rem" }}
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{ color: "#fff", fontWeight: "500", marginRight: "1.5rem" }}
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{ color: "#fff", fontWeight: "500", marginRight: "1.5rem" }}
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{ color: "#fff", fontWeight: "500", marginRight: "0" }}
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;

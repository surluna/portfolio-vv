import React, { useState } from "react";
import { Layout, Menu, Drawer } from "antd";

const { Header: AntHeader } = Layout;

const Header = ({ homeRef, skillsRef, projectsRef, contactRef }) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
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
            flex: 2,
            marginLeft: "1rem",
            fontWeight: "600",
            fontSize: "1.5rem",
            letterSpacing: "0.05em",
            color: "#fff",
            userSelect: "none",
          }}
        >
          My Portfolio
        </div>

        {/* 仅在桌面设备上显示菜单 */}
        {!isMobile && (
          <Menu
            theme="dark"
            mode="horizontal"
            style={{
              fontSize: "18px",
              backgroundColor: "rgb(15, 15, 15)",
              marginRight: "1rem",
              lineHeight: "46px",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Menu.Item
              key="1"
              style={{
                color: "#fff",
                fontWeight: "500",
                marginRight: "1.5rem",
              }}
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                color: "#fff",
                fontWeight: "500",
                marginRight: "1.5rem",
              }}
              onClick={() => scrollToSection(skillsRef)}
            >
              Skills
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                color: "#fff",
                fontWeight: "500",
                marginRight: "1.5rem",
              }}
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
        )}

        {isMobile && (
          <div
            onClick={showDrawer}
            style={{
              color: "#fff",
              cursor: "pointer",
              marginLeft: "auto",
              marginRight: "1rem",
            }}
          >
            ☰
          </div>
        )}
      </AntHeader>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical" style={{ width: "100%" }}>
          <Menu.Item
            key="1"
            onClick={() => {
              scrollToSection(homeRef);
              onClose();
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              scrollToSection(skillsRef);
              onClose();
            }}
          >
            Skills
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => {
              scrollToSection(projectsRef);
              onClose();
            }}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => {
              scrollToSection(contactRef);
              onClose();
            }}
          >
            Contact
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Header;

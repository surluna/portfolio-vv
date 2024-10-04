import React from "react";
import { Layout, Menu } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(15, 15, 15)",
        height: "4rem",
        boxShadow:
          "0 4px 8px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(255, 255, 255, 0.1)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "500", color: "#fff" }}>
        My Portfolio
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          fontSize: "18px",
          backgroundColor: "rgb(15, 15, 15)",
          marginLeft: "auto",
          marginRight: "3%",
          lineHeight: "46px",
        }}
      >
        <Menu.Item
          key="1"
          style={{ color: "#fff", fontWeight: "500", marginRight: "1.5rem" }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{ color: "#fff", fontWeight: "500", marginRight: "1.5rem" }}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{ color: "#fff", fontWeight: "500", marginRight: "1.5rem" }}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{ color: "#fff", fontWeight: "500", marginRight: "3rem" }}
        >
          Contact
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;

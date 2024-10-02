import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const PortfolioHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Projects</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default PortfolioHeader;

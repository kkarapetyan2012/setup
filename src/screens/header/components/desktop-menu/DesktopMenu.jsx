import React from "react";
import { Menu } from "antd";
// import { Router, Route, Link } from 'react-router-dom';
import "./DesktopMenu.scss";

const { SubMenu } = Menu;

const DesktopMenu = () => (
  <Menu mode="horizontal" className="mainMenu">
    <Menu.Item key="products">
      {/* <Link to="/">Products</ Link> */}
      Products
    </Menu.Item>

    <Menu.Item key="services">
      {/* <Link to="/">Services</ Link> */}
      Services
    </Menu.Item>

    <Menu.Item key="games">
      {/* <Link to="/">Games</ Link> */}
      Games
    </Menu.Item>

    <Menu.Item key="company">
      Company
      {/* <Link to="/">Company</ Link> */}
    </Menu.Item>

    <SubMenu key="lang" title="ENG">
      <Menu.Item key="5">ENG</Menu.Item>
      <Menu.Item key="6">RU</Menu.Item>
      <Menu.Item key="7">AM</Menu.Item>
    </SubMenu>

    <Menu.Item key="Contac-Us">
      {/* <Link to="/">Contac Us</ Link> */}
      Contac Us
    </Menu.Item>
  </Menu>
);

export default DesktopMenu;

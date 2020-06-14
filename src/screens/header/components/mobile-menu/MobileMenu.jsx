import React, { useState } from "react";
import { Menu, Button } from "antd";
import "./MobileMenu.scss";

const { SubMenu } = Menu;

const MobileMenu = () => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);

  return (

    <div className="mobileMenuContainer">
      <Button htmlType="primary" onClick={toggle}>
        <div />
        <div />
        <div />
      </Button>

      {isToggledOn ? (
        <Menu
          className="mobileMenu"
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >

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
      ) : null}

    </div>
  );
};

export default MobileMenu;

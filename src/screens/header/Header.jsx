import React from "react";
import { useMediaQuery } from "react-responsive";
import { logo } from "../../assets/images/icons";
import { DesktopMenu } from "./components/desktop-menu";
import { MobileMenu } from "./components/mobile-menu";
import "./Header.scss";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 896 });
  return (
    <div className="header">

      <div className="headerContainer d-flex justify-content_space-between align-items_center">
        <a href=" ">
          <img src={logo} alt="" />
        </a>
        {!isMobile ? <DesktopMenu /> : <MobileMenu />}
      </div>

    </div>
  );
};

export default Header;

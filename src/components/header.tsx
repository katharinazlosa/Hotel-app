import { useState } from "react";
import { Logo } from "../assets/icons/logo";
import Button from "./button";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const closeMenu = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <div className="header">
        <div
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
          <div className="menu-content">
            <Button text="Rooms" path="/rooms" position="sidebarposition" />
            <Button
              text="Fico aperitivo"
              path="/ficoaperitivo"
              position="sidebarposition"
            />
            <Button text="Info" path="/heritage" position="sidebarposition" />
            <Button text="Contact" path="/contact" position="sidebarposition" />

            <div className="sidebar-icons">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/facebook-new.png"
                alt="facebook-new"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </div>
          </div>
        </div>
        <div className="header__middle">
          <Logo path="/" />
        </div>
        <div className="header__right">
          <Button text="Book now" path="/booking" />
        </div>
      </div>
    </>
  );
};

export default Header;

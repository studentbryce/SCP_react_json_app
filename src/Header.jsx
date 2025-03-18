import React from "react";
import headerImage from "/images/SCP_Header.png"; // Import image
import headerTitle from "/images/SCP_Archives.jpg"; // Import image
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <img src={headerImage} alt="SCP Foundation" className="header-image" />
      <img src={headerTitle} alt="SCP Foundation Title" className="header-image" />
    </header>
  );
};

export default Header;


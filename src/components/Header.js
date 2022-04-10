import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div class="header-wraper">
      <div class="main-info">
        <h1>Web Development</h1>
        <Typed className="typed-text" strings={["Web Design", "Web Development", "Content Creator", "Blogger"]} typeSpeed={40} backSpeed={60} loop />
        <a href="" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;

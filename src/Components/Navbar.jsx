import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dummy"></div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon"
        width="100px"
      />
    </div>
  );
};

export default Navbar;

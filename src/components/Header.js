import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo2.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="headerNav__list">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="headerNav__list"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="#" className="nav-links" onClick={closeMobileMenu}>
            OLand
          </Link>
        </li>
        {/* <li className="headerNav__list">Home</li>
        <li className="headerNav__list">Home</li>
        <li className="headerNav__list">Home</li>
        <li className="headerNav__list">Home</li>
        <li className="headerNav__list">Home</li>
        <li className="headerNav__list">Home</li>*/}
      </ul>
    </nav>
  );
};
export default Header;

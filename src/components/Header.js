import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "./images/logo2.png";
import SignUpButton from "./SignUpButton";
import "./header.css";

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
    <nav className="navbar1">
      <div className="contain">
        <Link to="/">
          <img src={logo} alt="" className="navbar-logo" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-1">
            <Link to="/" className="nav-2" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-1">
            <Link to="#" className="nav-2" onClick={closeMobileMenu}>
              OLand
            </Link>
          </li>
          <li className="nav-1">
            <Link to="/" className="nav-2" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li
            className="nav-1"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-2" onClick={closeMobileMenu}>
              More <i className=" fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-1">
            <Link to="/" className="nav-2" onClick={closeMobileMenu}>
              Become an Agent
            </Link>
          </li>
          <li className="nav-1">
            <Link to="/" className="nav-2" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-1">
            <Link to="/login" className="nav-2" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
          <li className="nav-1">
            <Link
              to="/sign-Up"
              className="nav-2-mobile"
              onClick={closeMobileMenu}
            >
              Start Investing
            </Link>
          </li>
        </ul>
        <SignUpButton className="btn-in" />
      </div>
    </nav>
  );
};
export default Header;

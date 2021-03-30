import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo2.png";
import "./Navba.css";
import menuList from "./MenuList";
const Navba = () => {
  const [clicked, setClicked] = useState(false);
  const menu = menuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="cont1">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>{menu}</ul>
      </div>
    </nav>
  );
};

export default Navba;

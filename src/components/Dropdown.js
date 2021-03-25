import React, { useState } from "react";
import { MenuItems } from "./DropdwonItem";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="dropdown">
      <ul
        onClick={handleClick}
        className={click ? " dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.className}
                onclick={() => setClick(false)}
              >
                {item.icon} {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;

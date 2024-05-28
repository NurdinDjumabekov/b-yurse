import React from "react";
import "./style.scss";
import arrow from "../../assets/icons/ArrowDown.svg";
import menuIcon from "../../assets/icons/menuIcon.svg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__inner">
          <button>
            <img src={menuIcon} alt="|||" />
          </button>
          <h3>b’yurse</h3>
          <button>
            <img src={arrow} alt="|" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import arrow from "../../assets/icons/aroow.svg";
import "./style.scss";

export const NavPath = ({ list }) => {
  return (
    <div className="navPath">
      <div>
        <span>Каталог </span>
      </div>
      {list?.map((item) => (
        <div>
          <img src={arrow} alt=">" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

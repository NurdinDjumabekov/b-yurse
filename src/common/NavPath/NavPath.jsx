import React from "react";
import arrow from "../../assets/icons/aroow.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const NavPath = ({ list }) => {
  const navigate = useNavigate();
  return (
    <div className="navPath" onClick={() => navigate(-1)}>
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

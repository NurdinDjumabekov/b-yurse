import React from "react";
import arrow from "../../assets/icons/arrowRightTreg.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const NavPath = ({ list }) => {
  const navigate = useNavigate();
  return (
    <div className="navPath">
      <div className="active" onClick={() => navigate("/")}>
        <span>Каталог </span>
      </div>
      {list?.map((item, index) => (
        <div key={index} onClick={() => navigate(item?.path)}>
          <img src={arrow} alt=">" />
          <span className={!item?.active ? "active" : ""}>{item?.link}</span>
        </div>
      ))}
    </div>
  );
};

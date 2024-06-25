import React from "react";
import "./style.scss";
import like from "../../assets/images/likeBlack.png";

const MycheckBox = ({ onChange, item }) => {
  const { text, active } = item;

  const handleChange = () => {
    const newObj = { ...item, active: !active };
    onChange(newObj);
  };

  return (
    <div
      className={`checkboxBlock ${active ? "activeCheck" : ""}`}
      onClick={handleChange}
    >
      {active ? (
        <img src={like} alt="like" className="roundImg" />
      ) : (
        <div className="roundBlock"></div>
      )}
      <p>{text}</p>
    </div>
  );
};

export default MycheckBox;

import React from "react";
import "./style.scss";

const MyInputs = (props) => {
  const { title, placeholder, name } = props;
  const { onChange, required, email, refAddres } = props;
  return (
    <div className="myInput">
      <span>{title}</span>
      <input
        type={email ? "email" : "text"}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required={required}
        email={email}
        ref={refAddres}
      />
    </div>
  );
};

export default MyInputs;

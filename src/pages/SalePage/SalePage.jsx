import React, { useEffect } from "react";
import ClothList from "../../components/SalePage/ClothList/ClothList";
import ClothTypes from "../../components/SalePage/ClothTypes/ClothTypes";
import "./style.scss";

const SalePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sale">
      <div className="container">
        <div className="sale__inner">
          <ClothTypes />
          <ClothList />
        </div>
      </div>
    </div>
  );
};

export default SalePage;

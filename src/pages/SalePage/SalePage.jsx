/////hooks
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

////// components
import ClothList from "../../components/SalePage/ClothList/ClothList";
import ClothTypes from "../../components/SalePage/ClothTypes/ClothTypes";

////styles
import "./style.scss";

////fns
import { getListBrands, getListCateg } from "../../store/reducers/requestSlice";
import { getListColors, getListSize } from "../../store/reducers/requestSlice";

const SalePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(getListCateg());
    dispatch(getListSize());
    dispatch(getListColors());
    dispatch(getListBrands());
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

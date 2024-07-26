/////hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// components
import ClothList from "../../components/SalePage/ClothList/ClothList";
import ClothTypes from "../../components/SalePage/ClothTypes/ClothTypes";

////styles
import "./style.scss";

////fns
import SkeletonsMainPage from "../../common/Skeletons/SkeletonsMainPage/SkeletonsMainPage";

const SalePage = () => {
  const dispatch = useDispatch();

  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (preloader) {
    return <SkeletonsMainPage />;
  }

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

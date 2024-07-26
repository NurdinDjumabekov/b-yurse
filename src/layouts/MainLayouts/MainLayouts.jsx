//////// hooks
import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/////// style
import "./MainLayouts.scss";

/////// components
import ModalNumber from "../../components/Modals/ModalNumber/ModalNumber";
import ModalNumConfirm from "../../components/Modals/ModalNumConfirm/ModalNumConfirm";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import { getListBrands, getListCateg } from "../../store/reducers/requestSlice";
import { getListColors, getListSize } from "../../store/reducers/requestSlice";
import { useEffect } from "react";

const MainLayouts = () => {
  const dispatch = useDispatch();

  const footerRef = useRef(null);

  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getListCateg());
    dispatch(getListSize());
    dispatch(getListColors());
    dispatch(getListBrands());
  }, []);

  return (
    <div className="mainLayouts">
      {!preloader && <Menu />}
      <Outlet />
      {!preloader && <Footer footerRef={footerRef} />}
      <ModalNumber />
      <ModalNumConfirm />
    </div>
  );
};

export default MainLayouts;

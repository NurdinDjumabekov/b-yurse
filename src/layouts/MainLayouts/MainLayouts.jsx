import React, { useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./MainLayouts.scss";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import ModalNumber from "../../components/Modals/ModalNumber/ModalNumber";
import ModalNumConfirm from "../../components/Modals/ModalNumConfirm/ModalNumConfirm";

const MainLayouts = () => {
  const footerRef = useRef(null);

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="mainLayouts">
      <Menu />
      <Outlet />
      <Footer footerRef={footerRef} />
      <ModalNumber />
      <ModalNumConfirm />
    </div>
  );
};

export default MainLayouts;

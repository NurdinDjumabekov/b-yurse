////imgs
import menu from "../../assets/icons/menu.svg";
import userCheck from "../../assets/icons/UserCheck.svg";

////components
import MenuSave from "../MenuSave/MenuSave";

////hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///fns
import { lookBasketFN, lookSizeFN } from "../../store/reducers/stateSlice";
import { lookFavoriteFN } from "../../store/reducers/stateSlice";

////style
import "./style.scss";

const Menu = () => {
  const dispatch = useDispatch();

  const { lookFavorite, lookBasket } = useSelector((state) => state.stateSlice);

  const { lookSize } = useSelector((state) => state.stateSlice);

  const noneShadow = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
  };

  const check = lookFavorite || lookBasket;

  return (
    // <div className={`menu ${lookSize && "menu__zIndex"}`}>
    <div className={`menu`}>
      <div className="container">
        <div className="menu__inner">
          <div className="menu__main">
            <button>
              <img src={menu} alt="menu" />
            </button>
            <button>
              <img src={userCheck} alt="userCheck" />
            </button>
          </div>
          <div className="menu__logo">
            <h1>b’yurse</h1>
          </div>
          <div className="menu__favorite">
            <MenuSave />
          </div>
        </div>
      </div>
      {check && <div className="shadow" onClick={noneShadow}></div>}
    </div>
  );
};

export default Menu;

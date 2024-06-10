////components
import MenuSave from "../MenuSave/MenuSave";

////hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///fns
import { lookBasketFN, lookMenuFN } from "../../store/reducers/stateSlice";
import { lookFavoriteFN } from "../../store/reducers/stateSlice";

////style
import "./style.scss";
import MenuChoice from "../MenuChoice/MenuChoice";
import { useEffect } from "react";
import { getListBrands } from "../../store/reducers/requestSlice";

const Menu = () => {
  const dispatch = useDispatch();

  const { lookFavorite, lookBasket, lookMenu } = useSelector(
    (state) => state.stateSlice
  );

  const { lookSize } = useSelector((state) => state.stateSlice);

  const noneShadow = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    dispatch(lookMenuFN(false));
  };

  useEffect(() => {
    dispatch(getListBrands());
  }, []);

  const check = lookFavorite || lookBasket || lookMenu;

  return (
    <div className={`menu ${lookSize && "epsIndex"}`}>
      <div className="container">
        <div className="menu__inner">
          <MenuChoice />
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

///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

////imgs
import info from "../../../assets/icons/Info.svg";

///style
import "./style.scss";

///fns
import { activeColorFN } from "../../../store/reducers/stateSlice";
import { activeColorEveryFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothColor = ({ oneCodeId, choiceEvery, listEvery }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeColorEvery, activeBrands } = useSelector(
    (state) => state.stateSlice
  );

  const { listColor } = useSelector((state) => state.requestSlice);

  const click = (id) => {
    dispatch(activeColorFN(id));
    const obj1 = { categId: activeCateg.categId, activeColor: id };
    const obj2 = { activeSize, minPrice: activePrice.min, activeBrands };
    const obj3 = { maxPrice: activePrice?.max, type: activeCateg.type };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const choiceForBasket = (id) => {
    dispatch(activeColorEveryFN(id));
  };

  const checkPage = pathname.includes("every"); //// if это детальная страница

  return (
    <>
      <div className="clothColor">
        <div className={`mainTitle position ${checkPage && "everyPosition"}`}>
          <h3>Цветовая палитра</h3>
          <img src={info} alt="info" className="imgAction" />
        </div>
        {!oneCodeId && <div className="line"></div>}
        {choiceEvery ? (
          <ul className="listColor">
            {listEvery?.map((item) => (
              <li
                key={item?.id}
                className={`list ${
                  activeColorEvery == item.id && "activeItem"
                }`}
                onClick={() => choiceForBasket(item.id)}
              >
                <img src={item?.color} alt="imgColor" />
                <div className="activeImg">
                  <img src={item?.color} alt="imgColorBig" />
                </div>
                <div className="shadowWhite" />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="listColor">
            {oneCodeId ? (
              <>
                {listColor?.map((item) => {
                  if (oneCodeId == item.id) {
                    return (
                      <li key={item?.id}>
                        {item?.text}
                        <img src={item?.color} alt="imgColor" />
                        <img
                          src={item?.color}
                          alt="imgColorBig"
                          className="activeImg"
                        />
                      </li>
                    );
                  }
                })}
              </>
            ) : (
              <>
                {listColor?.map((item) => (
                  <li
                    key={item?.id}
                    className={`list ${activeColor == item.id && "activeItem"}`}
                    onClick={() => click(item.id)}
                  >
                    {item?.text}
                    <img src={item?.color} alt="imgColor" />
                    <div className="activeImg">
                      <img src={item?.color} alt="imgColorBig" />
                    </div>
                    <div className="shadowWhite" />
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default ClothColor;

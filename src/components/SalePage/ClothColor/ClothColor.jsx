///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

////imgs
import info from "../../../assets/icons/Info.svg";

///style
import "./style.scss";

////helpers
import { listColors } from "../../../helpers/LodalData";

///fns
import { activeColorFN } from "../../../store/reducers/stateSlice";

const ClothColor = ({ oneCodeId }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { activeColor } = useSelector((state) => state.stateSlice);

  const click = (codeid) => dispatch(activeColorFN(codeid));

  const checkPage = pathname.includes("every"); //// if это детальная страница

  return (
    <>
      <div className="clothColor">
        <div className={`mainTitle position ${checkPage && "everyPosition"}`}>
          <h3>Цветовая палитра</h3>
          <img src={info} alt="info" className="imgAction" />
        </div>
        {!oneCodeId && <div className="line"></div>}
        <ul className="listColor">
          {oneCodeId ? (
            <>
              {listColors?.map((item) => {
                if (oneCodeId == item.codeid) {
                  return (
                    <li key={item?.codeid}>
                      {item?.text}
                      <img src={item?.imgColor} alt="imgColor" />
                      <img
                        src={item?.imgColorBig}
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
              {listColors?.map((item) => (
                <li
                  key={item?.codeid}
                  className={`list ${
                    activeColor == item.codeid && "activeItem"
                  }`}
                  onClick={() => click(item.codeid)}
                >
                  {item?.text}
                  <img src={item?.imgColor} alt="imgColor" />
                  <div className="activeImg">
                    <img src={item?.imgColorBig} alt="imgColorBig" />
                  </div>
                  <div className="shadowWhite" />
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default ClothColor;

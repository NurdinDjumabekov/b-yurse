///hooks
import React, { useState } from "react";

////imgs
import color from "../../../assets/images/голубая лагуна.png";
import color2 from "../../../assets/images/молочный.png";
import info from "../../../assets/icons/Info.svg";

///style
import "./style.scss";
import { useLocation } from "react-router-dom";

const ClothColor = ({ oneCodeId }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const { pathname } = useLocation();

  const [list, setList] = useState([
    {
      codeid: 1,
      imgColor: color,
      imgColorBig: color,
      active: true,
    },
    {
      codeid: 2,
      imgColor: color2,
      imgColorBig: color2,
      active: false,
    },
    {
      codeid: 3,
      imgColor: color,
      imgColorBig: color,
      active: false,
    },
    {
      codeid: 4,
      imgColor: color2,
      imgColorBig: color2,
      active: false,
    },
  ]);

  const click = (codeid) => {
    const newData = list?.map((item) => ({
      ...item,
      active: item.codeid === codeid, // обновляем только поле active
    }));
    setList(newData);
  };

  const checkPage = pathname.includes("every"); //// if это детальная страница

  return (
    <div className="clothColor">
      <div className={`mainTitle position ${checkPage && "everyPosition"}`}>
        <h3>Цветовая палитра</h3>
        <img src={info} alt="info" className="imgAction" />
      </div>
      {!oneCodeId && <div className="line"></div>}
      <ul className="listColor">
        {oneCodeId ? (
          <>
            {list?.map((item) => {
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
            {list?.map((item) => (
              <li
                key={item?.codeid}
                className={item?.active ? "activeItem" : ""}
                onClick={() => click(item.codeid)}
              >
                {item?.text}
                <img src={item?.imgColor} alt="imgColor" />
                <img
                  src={item?.imgColorBig}
                  alt="imgColorBig"
                  className="activeImg"
                />
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default ClothColor;

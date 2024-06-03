import React, { useState } from "react";
import color from "../../../assets/images/голубая лагуна.png";
import color2 from "../../../assets/images/молочный.png";
import "./style.scss";

const ClothColor = ({ oneCodeId }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

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

  return (
    <div>
      <div className="mainTitle">
        <h3>Цветовая палитра</h3>
      </div>
      {!oneCodeId && <div className="line"></div>}
      <ul className="listColor">
        {oneCodeId
          ? list?.map((item) => {
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
            })
          : list?.map((item) => (
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
      </ul>
    </div>
  );
};

export default ClothColor;

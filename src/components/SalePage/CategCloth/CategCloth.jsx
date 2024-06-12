import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

////imgs
import like from "../../../assets/icons/like.svg";

import { activeCategFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";

const CategCloth = ({ list, typeTitle, typeSex }) => {
  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);

  const actionCateg = ({ id, gender }) => {
    dispatch(activeCategFN({ categId: id, type: gender }));
    const obj1 = { categId: id, type: gender, activeSize };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max, activeBrands };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
    window.scrollTo(0, 0);
  };

  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (active) {
      const scrollHeight = contentRef?.current?.scrollHeight;
      contentRef.current.style.maxHeight = `${scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [active]);

  const checkTitle = activeCateg?.type;

  const checkCateg = activeCateg?.categId;

  return (
    <div className="position">
      <div className="mainTitle">
        <h3 className={checkTitle == typeTitle && "activeTitle"}>{typeSex}</h3>
        <img
          src={like}
          alt="like"
          className="accordionImg"
          onClick={() => setActive(!active)}
        />
      </div>
      <div className="line"></div>

      <ul
        ref={contentRef}
        className={`listTypes more ${active ? "active" : "disActive"}`}
      >
        {list?.map((item) => (
          <li
            key={item?.id}
            className={
              checkCateg == item.id && checkTitle == typeTitle
                ? "activeItem"
                : ""
            }
            onClick={() => actionCateg(item)}
          >
            <p>{item?.categoryName}</p>
            <span className="count">{item?.count || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategCloth;

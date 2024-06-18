import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
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

  const [active, setActive] = useState(true);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [active, list]);

  const changeAccord = () => setActive(!active);

  const checkTitle = activeCateg?.type;
  const checkCateg = activeCateg?.categId;

  return (
    <div className="position">
      <div className="mainTitle titleAction" onClick={changeAccord}>
        <h3>{typeSex}</h3>

        <img
          src={like}
          alt="like"
          className={`accordionImg ${active ? "active" : ""}`}
        />
      </div>

      <ul
        ref={contentRef}
        className={`listTypes more ${active ? "active" : "disActive"}`}
        style={{ maxHeight: active ? contentHeight : "0px" }}
      >
        {list?.map((item) => (
          <li
            key={item?.id}
            className={
              checkCateg === item.id && checkTitle === typeTitle
                ? "activeItem"
                : ""
            }
            onClick={() => actionCateg(item)}
          >
            <p>{item?.categoryName}</p>
            {/* <span className="count">{item?.count || 0}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategCloth;

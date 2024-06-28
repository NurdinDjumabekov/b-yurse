///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////imgs
import img1 from "../../../assets/images/молочный.png";
import img2 from "../../../assets/images/голубая лагуна.png";
import img3 from "../../../assets/images/bigImg.png";

///style
import "./style.scss";

///fns
import { activeColorFN } from "../../../store/reducers/stateSlice";
import { activeColorEveryFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothColor = (props) => {
  const { choiceEvery } = props;

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeColorEvery, activeBrands } = useSelector(
    (state) => state.stateSlice
  );

  const { lookSize } = useSelector((state) => state.stateSlice);

  // const { listColor } = useSelector((state) => state.requestSlice);

  const click = (id) => {
    dispatch(activeColorFN(id));
    const obj1 = { categId: activeCateg.categId, activeColor: id };
    const obj2 = { activeSize, minPrice: activePrice.min, activeBrands };
    const obj3 = { maxPrice: activePrice?.max, type: activeCateg.type };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const choiceForBasket = (id) => dispatch(activeColorEveryFN(id));

  /////// delete
  const listColor = [
    { id: 1, color: img1 },
    { id: 2, color: img2 },
    { id: 3, color: img1 },
    { id: 4, color: img2 },
    { id: 5, color: img1 },
    { id: 6, color: img1 },
    { id: 7, color: img2 },
    { id: 8, color: img1 },
    { id: 9, color: img2 },
    { id: 10, color: img1 },
  ];

  if (choiceEvery) {
    return (
      <div className={`clothColor ${lookSize && "moreNoneActive"}`}>
        <div className="mainTitle">
          <h3>Цветовая палитра</h3>
        </div>
        <ul className="listColor">
          {listColor?.map((item) => (
            <li
              key={item?.id}
              className={`list ${activeColorEvery == item?.id && "activeItem"}`}
              onClick={() => choiceForBasket(item.id)}
            >
              <img src={item?.color} alt="imgColor" className="miniImg" />
              <div className="activeImg">
                {/* <img src={item?.color} alt="imgColorBig" /> */}
                <img src={img3} alt="imgColorBig" />
              </div>
              <div className="shadowWhite" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`clothColor ${lookSize && "moreNoneActive"}`}>
      <div className="mainTitle">
        <h3>Цветовая палитра</h3>
      </div>
      <ul className="listColor">
        {listColor?.map((item) => (
          <li
            key={item?.id}
            className={`list ${activeColor == item.id && "activeItem"}`}
            onClick={() => click(item.id)}
          >
            <img src={item?.color} alt="imgColor" className="miniImg" />
            <div className="activeImg">
              {/* <img src={item?.color} alt="imgColorBig" /> */}
              <img src={img3} alt="imgColorBig" />
            </div>
            <div className="shadowWhite" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothColor;

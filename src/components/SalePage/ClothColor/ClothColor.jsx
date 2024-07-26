////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////// style
import "./style.scss";

////// fns
import { activeColorFN } from "../../../store/reducers/stateSlice";
import { activeColorEveryFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothColor = (props) => {
  const { activeColorProps } = props;
  ///// activeColorProps - выбираю один активный цвет

  ///// choiceEvery - для детальной страницы (выбор каждого размера)
  const { choiceEvery, codeid } = props;

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeColorEvery, activeBrands } = useSelector(
    (state) => state.stateSlice
  );

  const { lookSize } = useSelector((state) => state.stateSlice);

  const { listColor } = useSelector((state) => state.requestSlice);

  const click = (id) => {
    dispatch(activeColorFN(id));
    const obj1 = { categId: activeCateg.categId, activeColor: id };
    const obj2 = { activeSize, minPrice: activePrice.min, activeBrands };
    const obj3 = { maxPrice: activePrice?.max, type: activeCateg.type };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const choiceForBasket = (id) => dispatch(activeColorEveryFN(id));

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
                <img src={item?.color} alt="imgColorBig" />
              </div>
              <div className="shadowWhite" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeColorProps) {
    return (
      <div className={`clothColor ${lookSize && "moreNoneActive"}`}>
        <div className="mainTitle">
          <h3>Цветовая палитра</h3>
        </div>
        <ul className="listColor">
          {listColor?.map((item) => {
            if (item.id == activeColorProps) {
              return (
                <li key={item?.id} className={`list activeItem`}>
                  <img src={item?.color} alt="imgColor" className="miniImg" />
                  <div className="activeImg">
                    <img src={item?.color} alt="imgColorBig" />
                  </div>
                  <div className="shadowWhite" />
                </li>
              );
            }
          })}
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
              <img src={item?.color} alt="imgColorBig" />
            </div>
            <div className="shadowWhite" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothColor;

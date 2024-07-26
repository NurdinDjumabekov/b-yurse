///////////hoooks
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

///////// /style
import "./style.scss";

///////// components
import { NavPath } from "../../common/NavPath/NavPath";
import ClothSize from "../../components/SalePage/ClothSize/ClothSize";
import ClothColor from "../../components/SalePage/ClothColor/ClothColor";
import RecomCloth from "../../components/EveryClothPage/RecomCloth/RecomCloth";
import { Description } from "../../components/EveryClothPage/Description/Description";
import MayBeFavorite from "../../components/EveryClothPage/MayBeFavorite/MayBeFavorite";
import Favourite from "../../common/Favourite/Favourite";

////////// fns
import { addProdBasket } from "../../store/reducers/saveDataSlice";
import { detailedCloth } from "../../store/reducers/requestSlice";
import { activeSizeEveryFN } from "../../store/reducers/stateSlice";
import { activeColorEveryFN } from "../../store/reducers/stateSlice";

///////// imgs
import pay2 from "../../assets/images/pay2.png";

///// delete
import basket from "../../assets/icons/basket.svg";
import pay1 from "../../assets/images/pay1.png";

///////// helpers
import { sarchImg, sarchImgSeconds } from "../../helpers/sarchImg";
import SkeletonsDetailedPage from "../../common/Skeletons/SkeletonsDetailedPage/SkeletonsDetailedPage";

const EveryClothPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;

  const { everyCloth, preloader } = useSelector((state) => state.requestSlice);
  const { activeColorEvery } = useSelector((state) => state.stateSlice);
  const { activeSizeEvery } = useSelector((state) => state.stateSlice);

  const addBasket = () => {
    if (activeSizeEvery == 0) {
      alert("Выберите размер одежды");
    } else if (activeColorEvery == 0) {
      alert("Выберите цвет одежды");
    } else {
      alert("Товар добавлен в корзину");
      const data = { ...everyCloth, activeColorEvery, activeSizeEvery };
      dispatch(addProdBasket(data));
      clear();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(detailedCloth(id));
    clear();
  }, [id]);

  const clear = () => {
    dispatch(activeColorEveryFN(0)); ///// обнуляю state для временного хранения цвета
    dispatch(activeSizeEveryFN(0)); ///// обнуляю state для временного хранения размера
  };

  const listImg = sarchImgSeconds(everyCloth?.photos);

  const listNavDecor = [
    { link: everyCloth?.brand?.collectionName, path: "/", active: false },
    {
      link: everyCloth?.category?.categoryName,
      path: `/every/${id}`,
      active: true,
    },
  ];

  if (preloader) {
    return <SkeletonsDetailedPage />;
  }

  return (
    <div className="everyCloth">
      <div className="container">
        <NavPath list={listNavDecor} />

        <div className="everyCloth__inner">
          <div className="mainContant">
            <div className="dopImg">
              {listImg?.slice(0, 3)?.map((item) => (
                <div key={item?.id}>
                  <img src={item?.url} alt="" />
                </div>
              ))}
            </div>
            <div className="mainImg">
              <img src={sarchImg(everyCloth?.photos)?.url} alt="" />
            </div>
          </div>

          <div className="dopContant">
            <h5>{everyCloth?.productName}</h5>
            <div className="prices">
              <p>{everyCloth?.price} ₽</p>
            </div>
            <div className="blockPay">
              <img src={pay2} alt="pay" />
              <span>четыре платежа по ~870 ₽</span>
            </div>

            <ClothSize typeSize={"up"} choiceEvery={true} />

            <ClothColor choiceEvery={true} />

            <div className="actions">
              <button className="choiceCloth" onClick={addBasket}>
                Добавить в корзину
              </button>
              <Favourite obj={everyCloth} black={true} />
            </div>
            <Description everyCloth={everyCloth} />
          </div>
        </div>
        <RecomCloth list={everyCloth?.recommendations} />
        <MayBeFavorite list={everyCloth?.recommendations} />
      </div>
    </div>
  );
};

export default EveryClothPage;

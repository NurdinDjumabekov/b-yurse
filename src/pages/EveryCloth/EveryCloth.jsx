import React from "react";
import { useParams } from "react-router-dom";
import women from "../../assets/images/Rectangle 478.png";
import { NavPath } from "../../common/NavPath/NavPath";
import "./style.scss";
import ClothSize from "../../components/SalePage/ClothSize/ClothSize";

const EveryCloth = () => {
  const params = useParams();

  const { id } = params;

  const obj = {
    imgs: [women, women, women, women],
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    descr:
      "Идеальная футболка с облегающим кроем, а также с круглым вырезом, является отличным вариантом для повседневного и уикенд ношения.   Футбола изготовлена ​​из премиального, прохладного, удобного и эластичного хлопка, отделанного качественными строчками из крепких ниток. Ведь, это настоящая классика на все времена.",
  };

  console.log(params, "params");

  const link = [
    "Бестселлер-коллекция",
    "Футболка из премиальной ткани с облегающим кроем",
  ];

  return (
    <div className="everyCloth">
      <div className="container">
        <NavPath list={link} />
        <div className="everyCloth__inner">
          <div className="mainContant">
            <div className="dopImg">
              <div>
                <img src={obj?.imgs?.[0]} alt="" />
              </div>
              <div>
                <img src={obj?.imgs?.[1]} alt="" />
              </div>
              <div>
                <img src={obj?.imgs?.[2]} alt="" />
              </div>
            </div>
            <div className="mainImg">
              <img src={obj?.imgs?.[3]} alt="" />
            </div>
          </div>
          <div className="dopContant">
            <h5>{obj?.title}</h5>
            <p>{obj?.title}</p>
            <ClothSize />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryCloth;

import React from "react";
import "./style.scss";
import imgsCheck from "../../assets/icons/CheckCircle.svg";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const navCatalog = () => navigate("catalog");

  return (
    <div className="mainPage">
      <div className="container">
        <div className="mainPage__inner">
          <h1>b’yurse</h1>
          <div className="mainInfo">
            <h2>будь собою.</h2>
            <button onClick={navCatalog}>Перейти в каталог</button>
            <div className="deliveryText">
              <img src={imgsCheck} alt="imgsCheck" />
              <p>доставка — бесплатная от 10,000 ₽</p>
            </div>
          </div>
          <div className="conditions">
            <p>
              Если вы продолжаете использовать наш интернет-сайт, то вы
              соглашаетесь на обработку файлов куки (англ. «cookie»), тем самым,
              помогаете нам вести наш интернет-сайт комфортнее и полезнее для
              каждого человека
            </p>
            <button>Подтвердить и скрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";
import "./style.scss";
import vk from "../../assets/icons/vk.svg";
import telega from "../../assets/icons/telega.svg";

////delete
import news from "../../assets/images/news.png";
import imgFooter from "../../assets/images/imgFooter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="titleMain">
            <h4>b’yurse</h4>
            <div className="imgSocial">
              <div>
                <img src={vk} alt="vk" />
              </div>
              <div>
                <img src={telega} alt="telega" />
              </div>
            </div>
          </div>
          <div className="textInfo">
            <div>
              <p>ежемесячная подписка</p>
              <p>производственная программа</p>
              <p>реферальная программа</p>
              <p>франшиза бренда</p>
            </div>
            <div>
              <p>условия обработки персональных данных</p>
              <p>условия обработки файлов куки</p>
              <p>условия доставки товаров</p>
              <p>публичная оферта</p>
            </div>
            <div>
              <span>+7 800 800 10 10</span>
              <span>info@byurse.ru</span>
            </div>
          </div>
          <div className="textInfo more">
            <div>
              <p>пользовательское соглашение</p>
              <b>2024 ⓒ все права защищены</b>
            </div>
            <div>
              <b>ип чернышова л. · огрн: 777777777777777</b>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

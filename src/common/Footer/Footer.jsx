import React from "react";
import "./style.scss";
import contacts from "../../assets/icons/contacts.svg";
import news from "../../assets/images/news.png";
import imgFooter from "../../assets/images/imgFooter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__main">
            <div className="titleMain">
              <h4>b’yurse</h4>
              <img src={contacts} alt="vk" />
            </div>
            <div className="textSecond">
              <div>
                <p>оплата и доставка товара</p>
                <p>ежемесячная подписка</p>
                <p>производственная программа</p>
                <p>реферальная программа</p>
                <p>франшиза бренда</p>
              </div>
              <div className="textSecond__inner">
                <div>
                  <p>+7 937 475-75-95</p>
                  <p>info@byurse.ru</p>
                </div>
                <div>
                  <p>график работы поддержки</p>
                  <p>ежедневно, 08:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="textSecond more">
              <div>
                <p>политика конфиденциальности и иное</p>
                <p>2024 ⓒ все права защищены</p>
              </div>
              <div>
                <span>
                  <b>FFTF</b> · создали с лобовью
                </span>
              </div>
            </div>
          </div>
          <div className="footer__info">
            <div className="header">
              <h4>b’yurse</h4>
              <img src={news} alt="news" />
            </div>
            <p>01.06.2024</p>
            <span>
              подпишись на нас в нашем сообществе «VK», а также на наш
              телеграм-канал, и участвуй в постоянных мероприятиях от магазина!
            </span>
            <img src={imgFooter} alt="imgFooter" className="imgFooter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

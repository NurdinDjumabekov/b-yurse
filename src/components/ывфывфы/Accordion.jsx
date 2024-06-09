import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.scss"; // Стили для анимации

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button onClick={toggleAccordion}>
        {isOpen ? "Скрыть список" : "Показать список"}
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="asdasd"
        unmountOnExit
      >
        <div className="accordion-content-wrapper">
          <ul className="accordion-content">
            <li>Элемент 1</li>
            <li>Элемент 2</li>
            <li>Элемент 3</li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Accordion;

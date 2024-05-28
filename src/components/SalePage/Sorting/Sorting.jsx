import React from 'react';
import './style.scss';
import krest from '../../../assets/icons/krest.svg';
import aroow from '../../../assets/icons/aroow.svg';

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="filter">
        <p>сбросить фильтр</p>
        <button>
          <img src={krest} alt="x" />
        </button>
      </div>
      <div className="filter">
        <p>сортировка</p>
        <button>
          <img src={aroow} alt=">" />
        </button>
      </div>
    </div>
  );
};

export default Sorting;

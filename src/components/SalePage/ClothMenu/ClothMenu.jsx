import React from 'react';

const ClothMenu = () => {
  const list = [
    {
      codeid: 1,
      text: 'Вся одежда',
    },
    {
      codeid: 2,
      text: 'Подарочная карта',
    },
    {
      codeid: 3,
      text: 'Вся одежда',
    },
    {
      codeid: 4,
      text: 'Бестселлер-коллекция',
    },
    {
      codeid: 5,
      text: 'Нью-коллекция',
    },
  ];
  return (
    <>
      <h2>Премиальная одежда</h2>
      <div className="line"></div>
      <ul className="listTypes">
        {list?.map((item) => (
          <li key={item?.codeid}>
            <p>{item?.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClothMenu;

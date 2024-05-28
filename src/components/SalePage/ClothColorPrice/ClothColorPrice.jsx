import React, { useState } from 'react';
import info from '../../../assets/icons/Info.svg';
import color from '../../../assets/images/голубая лагуна.png';
import color2 from '../../../assets/images/молочный.png';
import './style.scss';
import { Box, Slider } from '@mui/material';

const ClothColorPrice = () => {
  const [list, setList] = useState([
    {
      codeid: 1,
      imgColor: color,
      imgColorBig: color,
      active: true,
    },
    {
      codeid: 2,
      imgColor: color2,
      imgColorBig: color2,
      active: false,
    },
    {
      codeid: 3,
      imgColor: color,
      imgColorBig: color,
      active: false,
    },
    {
      codeid: 4,
      imgColor: color2,
      imgColorBig: color2,
      active: false,
    },
  ]);

  const click = (codeid) => {
    const newData = list?.map((item) => ({
      ...item,
      active: item.codeid === codeid, // обновляем только поле active
    }));
    setList(newData);
  };

  const onChangePrice = (price) => {
    return `${price}`;
  };

  // const marks = [{ value: 10 }, { value: 100 }];

  return (
    <>
      <div className="mainTitle">
        <h3>Цветовая палитра</h3>
      </div>
      <div className="line"></div>
      <ul className="listColor">
        {list?.map((item) => (
          <li
            key={item?.codeid}
            className={item?.active ? 'activeItem' : ''}
            onClick={() => click(item.codeid)}
          >
            {item?.text}
            <img src={item?.imgColor} alt="imgColor" />
            <img
              src={item?.imgColorBig}
              alt="imgColorBig"
              className="activeImg"
            />
          </li>
        ))}
      </ul>
      <div className="mainTitle">
        <h3>Цена</h3>
      </div>
      <div className="line"></div>
      <div className="priceBlock">
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label="Temperature"
            getAriaValueText={onChangePrice}
            shiftStep={30}
            step={10}
            valueLabelDisplay="on"
            min={10}
            max={12490}
            sx={{
              '& .MuiSlider-thumb': {
                color: 'black',
              },
              '& .MuiSlider-track': {
                color: 'black',
              },
              '& .MuiSlider-rail': {
                color: 'black',
              },
              '& .MuiSlider-mark': {
                color: 'black',
              },
              '& .MuiSlider-markLabel': {
                color: 'black',
              },
              '& .MuiSlider-valueLabel': {
                backgroundColor: 'transparent',
                color: '#222  ',
              },
            }}
            defaultValue={[1, 10000]}
            disableSwap
            // marks={marks}
          />
        </Box>
      </div>
    </>
  );
};

export default ClothColorPrice;

import React, { useState, useRef } from "react";
import "./style.scss";
import { Box, Slider } from "@mui/material";
import { activePriceFN } from "../../../store/reducers/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothPrices = () => {
  const [value, setValue] = useState([1, 10000]);
  const timerRef = useRef(null);

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);

  const onSliderChange = (event, newValue) => {
    dispatch(activePriceFN({ min: newValue?.[0], max: newValue?.[1] }));
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      const obj1 = { categId: activeCateg.categId, activeSize };
      const obj2 = { activeColor, minPrice: newValue?.[0] };
      const obj3 = { maxPrice: newValue?.[1], type: activeCateg.type };
      dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
    }, 1500);
  };

  return (
    <>
      <div className="mainTitle">
        <h3>Цена</h3>
      </div>
      <div className="line"></div>
      <div className="priceBlock">
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label="Temperature"
            onChange={onSliderChange}
            step={10}
            valueLabelDisplay="on"
            min={10}
            max={12490}
            sx={{
              "& .MuiSlider-thumb": {
                color: "black",
              },
              "& .MuiSlider-track": {
                color: "black",
              },
              "& .MuiSlider-rail": {
                color: "black",
              },
              "& .MuiSlider-mark": {
                color: "black",
              },
              "& .MuiSlider-markLabel": {
                color: "black",
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "transparent",
                color: "#222",
              },
            }}
            value={[activePrice?.min, activePrice?.max]}
            disableSwap
          />
        </Box>
      </div>
    </>
  );
};

export default ClothPrices;

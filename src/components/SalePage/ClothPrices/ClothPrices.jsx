import React, { useState, useRef } from "react";
import "./style.scss";
import { Box, Slider } from "@mui/material";
import { activePriceFN } from "../../../store/reducers/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothPrices = () => {
  const timerRef = useRef(null);

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeBrands, initialPrice } = useSelector(
    (state) => state.stateSlice
  );

  const onSliderChange = (event, newValue) => {
    dispatch(activePriceFN({ min: newValue?.[0], max: newValue?.[1] }));
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const obj1 = { categId: activeCateg.categId, activeSize };
      const obj2 = { activeColor, minPrice: newValue?.[0], activeBrands };
      const obj3 = { maxPrice: newValue?.[1], type: activeCateg.type };
      dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
    }, 500);
  };

  return (
    <>
      <div className="mainTitle">
        <h5 className="allPrice">Цена</h5>
      </div>
      <div className="priceBlock">
        <Box sx={{ width: "100%" }}>
          <Slider
            aria-label="Temperature"
            onChange={onSliderChange}
            step={1000}
            valueLabelDisplay="on"
            min={initialPrice?.min}
            max={initialPrice?.max}
            shiftStep={30}
            // marks
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
                backgroundColor: "#fff",
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

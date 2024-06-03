import React from "react";
import "./style.scss";
import { Box, Slider } from "@mui/material";

const ClothPrices = () => {
  const onChangePrice = (price) => {
    return `${price}`;
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
            getAriaValueText={onChangePrice}
            shiftStep={30}
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
                color: "#222  ",
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

export default ClothPrices;

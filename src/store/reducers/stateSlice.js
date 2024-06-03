import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },

  lookFavorite: false, //// для просмотра ибранных

  lookBasket: false, //// для просмотра корзины

  lookSize: false, //// для просмотра размеров

  lookMenu: false, //// для просмотра menu
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },

    lookFavoriteFN: (state, action) => {
      state.lookFavorite = action.payload;
    },

    lookBasketFN: (state, action) => {
      state.lookBasket = action.payload;
    },

    lookSizeFN: (state, action) => {
      state.lookSize = action.payload;
    },

    lookMenuFN: (state, action) => {
      state.lookMenu = action.payload;
    },
  },
});

export const {
  changeAlertText,
  lookFavoriteFN,
  lookBasketFN,
  lookSizeFN,
  lookMenuFN,
} = stateSlice.actions;

export default stateSlice.reducer;

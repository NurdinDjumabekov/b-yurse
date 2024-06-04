import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },

  //////modals
  lookFavorite: false, //// для просмотра ибранных

  lookBasket: false, //// для просмотра корзины

  lookSize: false, //// для просмотра размеров

  lookMenu: false, //// для просмотра menu

  lookNumber: false, ///// для модалки логина через номер

  lookNumberConf: false, ///// для модалки подтверждения номера
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

    lookNumberFN: (state, action) => {
      state.lookNumber = action.payload;
    },

    lookNumberConfFN: (state, action) => {
      state.lookNumberConf = action.payload;
    },
  },
});

export const {
  changeAlertText,
  lookFavoriteFN,
  lookBasketFN,
  lookSizeFN,
  lookMenuFN,
  lookNumberFN,
  lookNumberConfFN,
} = stateSlice.actions;

export default stateSlice.reducer;

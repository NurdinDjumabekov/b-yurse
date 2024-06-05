import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },

  numberUser: "", /// для ввода номера

  //////////////////////// categories all

  activeCateg: { categId: 1, type: 2 }, // (categ) id категории
  ////// (type) тип категрии (мужская одежда, женская, премиальная одежда ....)

  activeSize: 1, //// размер одежды

  activeColor: 1, //// цвет одежды

  activePrice: { min: 10, max: 12000 }, //// цена одежды диапозон

  //////////////////////// modals
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

    numberUserFN: (state, action) => {
      state.numberUser = action.payload;
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

    activeCategFN: (state, action) => {
      state.activeCateg = action.payload;
    },

    activeSizeFN: (state, action) => {
      state.activeSize = action.payload;
    },

    activeColorFN: (state, action) => {
      state.activeColor = action.payload;
    },

    activePriceFN: (state, action) => {
      state.activePrice = action.payload;
    },
  },
});

export const {
  changeAlertText,
  numberUserFN,
  lookFavoriteFN,
  lookBasketFN,
  lookSizeFN,
  lookMenuFN,
  lookNumberFN,
  lookNumberConfFN,
  activeCategFN,
  activeSizeFN,
  activeColorFN,
  activePriceFN,
} = stateSlice.actions;

export default stateSlice.reducer;

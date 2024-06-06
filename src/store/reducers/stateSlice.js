import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },

  numberUser: "", /// для ввода номера

  //////////////////////// categories all

  activeBrands: 0, // (categ) id категории

  activeCateg: { categId: 0, type: 0 }, // (categ) id категории
  ////// (type) тип категрии (мужская одежда, женская)

  activeSize: 0, //// размер одежды

  activeSizeEvery: 0, ////// для детальнйо страницы, тобы user мог временно
  //// до закидывания в корзину положить куда-то размер

  activeColor: 0, //// цвет одежды

  activeColorEvery: 0, ////// для детальнйо страницы, тобы user мог временно
  //// до закидывания в корзину положить куда-то цвет товара

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

    activeBrandsFN: (state, action) => {
      state.activeBrands = action.payload;
    },

    activeCategFN: (state, action) => {
      state.activeCateg = action.payload;
    },

    activeSizeFN: (state, action) => {
      state.activeSize = action.payload;
    },

    activeSizeEveryFN: (state, action) => {
      state.activeSizeEvery = action.payload;
    },

    activeColorFN: (state, action) => {
      state.activeColor = action.payload;
    },

    activeColorEveryFN: (state, action) => {
      state.activeColorEvery = action.payload;
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
  activeBrandsFN,
  activeCategFN,
  activeSizeFN,
  activeSizeEveryFN,
  activeColorFN,
  activeColorEveryFN,
  activePriceFN,
} = stateSlice.actions;

export default stateSlice.reducer;

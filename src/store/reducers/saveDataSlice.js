import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: {
    haveBeen: false,
    numberUser: "",
    chechAccount: false,
    fio: "",
  },

  basketList: [], //// корзина

  favouriteList: [], //// корзина
};

const saveDataSlice = createSlice({
  name: "saveDataSlice",
  initialState,
  reducers: {
    changeDataUser: (state, action) => {
      state.dataUser = action.payload;
    },

    /// добавление продуктов в корзину
    addProdBasket: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.basketList?.find(
        (item) => item.codeid === newItem.codeid
      );

      if (existingItem) {
        // Если элемент уже есть в корзине, увеличиваю счетчик
        const newData = state.basketList.map((item) =>
          item.codeid === newItem.codeid
            ? { ...item, count: item?.count + 1 }
            : item
        );
        state.basketList = newData;
      } else {
        // добавляю новый элемент с начальным счетчиком
        state.basketList = [...state.basketList, { ...newItem, count: 1 }];
      }
    },

    //// удаение с count(отнимаю по одному)
    removeProdBasket: (state, action) => {
      const { codeid } = action.payload;

      // Находим индекс элемента в корзине по codeid
      const existingOrderIndex = state.basketList.findIndex(
        (obj) => obj?.codeid === codeid
      );

      if (existingOrderIndex !== -1) {
        // Получаем элемент корзины по найденному индексу
        const existingOrder = state.basketList[existingOrderIndex];

        if (existingOrder?.count > 0) {
          // Уменьшаем счетчик count на 1
          state.basketList[existingOrderIndex] = {
            ...existingOrder,
            count: existingOrder.count - 1,
          };

          // Если count стал равным 0, удаляем элемент из корзины
          if (existingOrder.count === 1) {
            // Фильтруем массив и удаляем элемент с соответствующим codeid
            state.basketList = state.basketList.filter(
              (item) => item?.codeid !== codeid
            );
          }
        }
      }
    },

    //// прямое уджаление, не считая count сразу удаляет
    deleteProdBasket: (state, action) => {
      const deleteItem = action.payload;
      state.basketList = state.basketList?.filter(
        (item) => item?.codeid !== deleteItem?.codeid
      );
    },

    clearBasketList: (state, action) => {
      state.basketList = [];
    },

    /// добавление продуктов в корзину
    addProdFavourite: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.favouriteList?.find(
        (item) => item.codeid === newItem.codeid
      );

      if (existingItem) {
        // Если элемент уже есть в корзине, увеличиваю счетчик
        const newData = state.favouriteList.map((item) =>
          item.codeid === newItem.codeid
            ? { ...item, count: item?.count + 1 }
            : item
        );
        state.favouriteList = newData;
      } else {
        // добавляю новый элемент с начальным счетчиком
        state.favouriteList = [
          ...state.favouriteList,
          { ...newItem, count: 1 },
        ];
      }
    },

    //// удаение с count(отнимаю по одному)
    removeProdFavourite: (state, action) => {
      const { codeid } = action.payload;

      // Находим индекс элемента в корзине по codeid
      const existingOrderIndex = state.favouriteList?.findIndex(
        (obj) => obj?.codeid === codeid
      );

      if (existingOrderIndex !== -1) {
        // Получаем элемент корзины по найденному индексу
        const existingOrder = state.favouriteList?.[existingOrderIndex];

        if (existingOrder?.count > 0) {
          // Уменьшаем счетчик count на 1
          state.favouriteList[existingOrderIndex] = {
            ...existingOrder,
            count: existingOrder?.count - 1,
          };

          // Если count стал равным 0, удаляем элемент из корзины
          if (existingOrder.count === 1) {
            // Фильтруем массив и удаляем элемент с соответствующим codeid
            state.favouriteList = state?.favouriteList?.filter(
              (item) => item?.codeid !== codeid
            );
          }
        }
      }
    },

    //// прямое уджаление, не считая count сразу удаляет
    deleteProdFavourite: (state, action) => {
      const deleteItem = action.payload;
      state.favouriteList = state.favouriteList?.filter(
        (item) => item?.codeid !== deleteItem?.codeid
      );
    },

    clearFavouriteList: (state, action) => {
      state.favouriteList = [];
    },
  },
});

export const {
  changeDataUser,
  addProdBasket,
  removeProdBasket,
  deleteProdBasket,
  clearBasketList,
  addProdFavourite,
  removeProdFavourite,
  deleteProdFavourite,
  clearFavouriteList,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;

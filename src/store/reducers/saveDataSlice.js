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
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        // Если элемент уже есть в корзине, увеличиваю счетчик
        const newData = state.basketList.map((item) =>
          item.id === newItem.id ? { ...item, count: item?.count + 1 } : item
        );
        state.basketList = newData;
      } else {
        // добавляю новый элемент с начальным счетчиком
        state.basketList = [...state.basketList, { ...newItem, count: 1 }];
      }
    },

    //// удаение с count(отнимаю по одному)
    removeProdBasket: (state, action) => {
      const { id } = action.payload;

      // Находим индекс элемента в корзине по id
      const existingOrderIndex = state.basketList.findIndex(
        (obj) => obj?.id === id
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
            // Фильтруем массив и удаляем элемент с соответствующим id
            state.basketList = state.basketList.filter(
              (item) => item?.id !== id
            );
          }
        }
      }
    },

    //// прямое уджаление, не считая count сразу удаляет
    deleteProdBasket: (state, action) => {
      const deleteItem = action.payload;
      state.basketList = state.basketList?.filter(
        (item) => item?.id !== deleteItem?.id
      );
    },

    clearBasketList: (state, action) => {
      state.basketList = [];
    },

    /// добавление и удаление продуктов в избранных
    addDelProdFavourite: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.favouriteList?.findIndex(
        (item) => item?.id === newItem?.id
      );

      if (existingItemIndex !== -1) {
        // Если элемент уже есть в списке, удаляем его
        state.favouriteList = state.favouriteList?.filter(
          (item) => item?.id !== newItem?.id
        );
      } else {
        // Если элемента нет в списке, добавляем его
        state.favouriteList = [...state.favouriteList, newItem];
      }
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
  addDelProdFavourite,
  clearFavouriteList,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;

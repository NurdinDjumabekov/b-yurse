import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialPriceFN, lookNumberConfFN, lookNumberFN } from "./stateSlice";
const { REACT_APP_API_URL } = process.env;

///// sendNumberFN - отправка номера
export const sendNumberFN = createAsyncThunk(
  "sendNumberFN",
  async function (num, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}`,
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(lookNumberFN(false)); ////// закрываю модалку для ввода номера (логин)
        dispatch(lookNumberConfFN(true)); ////// открываю подтверждение номера
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// confirmNumberFN - отправка подтверждения номера
export const confirmNumberFN = createAsyncThunk(
  "confirmNumberFN",
  async function (props, { dispatch, rejectWithValue }) {
    const { clear, nums, numberUser } = props;
    // try {
    //   const response = await axios({
    //     method: "GET",
    //     url: `${REACT_APP_API_URL}`,
    //   });
    //   if (response.status >= 200 && response.status < 300) {
    //     dispatch(lookNumberConfFN(false)); ////// закрываю модалку
    //     clear();
    //   } else {
    //     throw Error(`Error: ${response.status}`);
    //   }
    // } catch (error) {
    //   return rejectWithValue(error.message);
    // }
  }
);

///// getListCateg - get список катег0рий
export const getListCateg = createAsyncThunk(
  "getListCateg",
  async function (props, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/reference-data/categories`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListBrands - get список брендов
export const getListBrands = createAsyncThunk(
  "getListBrands",
  async function (props, { dispatch, rejectWithValue }) {
    try {
      const url = `${REACT_APP_API_URL}/reference-data/brands`;
      const response = await axios(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListSize - get размеры
export const getListSize = createAsyncThunk(
  "getListSize",
  async function (props, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/reference-data/sizes`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListColors - get цвета
export const getListColors = createAsyncThunk(
  "getListColors",
  async function (props, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/reference-data/colors`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListCloth - get одежду
export const getListCloth = createAsyncThunk(
  "getListCloth",
  async function (props, { dispatch, rejectWithValue }) {
    const { categId, type, activeSize, activeBrands } = props;
    const { activeColor, minPrice, maxPrice, sorting } = props;

    const url =
      `${REACT_APP_API_URL}/products/filter?` +
      `genderId=${type}&categoryId=${categId}` +
      `&sizeIdDown=${activeSize.down}&sizeIdUp=${activeSize.up}` +
      `&colorId=${activeColor}&priceMin=${minPrice}` +
      `&priceMax=${maxPrice}&collectionName=${activeBrands}` +
      `&sorting=${sorting || 0}`;

    try {
      const response = await axios(url);
      if (response.status >= 200 && response.status < 300) {
        const { maxPrice, minPrice, products } = response?.data;

        if (minPrice == maxPrice) {
          dispatch(initialPriceFN({ min: 0, max: maxPrice }));
        } else {
          dispatch(initialPriceFN({ min: minPrice, max: maxPrice }));
        }
        return products;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// detailedCloth - get каждую одежду
export const detailedCloth = createAsyncThunk(
  "detailedCloth",
  async function (id, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/products/details/${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  preloader: false,
  listCloth: [],
  listBrands: [],
  categClothMan: [],
  categClothWoman: [],
  listSize: [],
  listColor: [],
  lisrPrice: [],
  everyCloth: {},
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    //////////////// sendNumberFN
    builder.addCase(sendNumberFN.fulfilled, (state, action) => {
      state.preloader = false;
    });
    builder.addCase(sendNumberFN.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(sendNumberFN.pending, (state, action) => {
      state.preloader = true;
    });

    ////////////////// confirmNumberFN
    builder.addCase(confirmNumberFN.fulfilled, (state, action) => {
      state.preloader = false;
    });
    builder.addCase(confirmNumberFN.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(confirmNumberFN.pending, (state, action) => {
      state.preloader = true;
    });

    /////////////////// getListBrands
    builder.addCase(getListBrands.fulfilled, (state, action) => {
      state.preloader = false;
      state.listBrands = action.payload;
    });
    builder.addCase(getListBrands.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListBrands.pending, (state, action) => {
      state.preloader = true;
    });

    ///////////////// getListCateg
    builder.addCase(getListCateg.fulfilled, (state, action) => {
      state.preloader = false;
      state.categClothWoman = action.payload?.filter((i) => i.gender == 2);
      state.categClothMan = action.payload?.filter((i) => i.gender == 1);
    });
    builder.addCase(getListCateg.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListCateg.pending, (state, action) => {
      state.preloader = true;
    });

    ///////////////// getListSize
    builder.addCase(getListSize.fulfilled, (state, action) => {
      state.preloader = false;
      state.listSize = action.payload;
    });
    builder.addCase(getListSize.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListSize.pending, (state, action) => {
      state.preloader = true;
    });

    ///////////////// getListColors
    builder.addCase(getListColors.fulfilled, (state, action) => {
      state.preloader = false;
      state.listColor = action.payload;
    });
    builder.addCase(getListColors.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListColors.pending, (state, action) => {
      state.preloader = true;
    });

    //////////////// getListCloth
    builder.addCase(getListCloth.fulfilled, (state, action) => {
      // state.preloader = false;
      state.listCloth = action.payload;
    });
    builder.addCase(getListCloth.rejected, (state, action) => {
      state.error = action.payload;
      // state.preloader = false;
    });
    builder.addCase(getListCloth.pending, (state, action) => {
      // state.preloader = true;
    });

    /////////////////// detailedCloth
    builder.addCase(detailedCloth.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyCloth = action.payload;
    });
    builder.addCase(detailedCloth.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(detailedCloth.pending, (state, action) => {
      state.preloader = true;
    });
  },
  reducers: {
    everyClothFN: (state, action) => {
      state.everyCloth = action.payload;
    },
  },
});
export const { everyClothFN } = requestSlice.actions;

export default requestSlice.reducer;

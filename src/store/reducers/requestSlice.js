import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

// export const getMainProd = createAsyncThunk(
//   "getMainProd",
//   async function (info, { dispatch, rejectWithValue }) {
//     /// все цветы 10440
//     try {
//       const response = await axios({
//         method: "GET",
//         url: `${REACT_APP_API_URL}/api/main_prod?id=10440`,
//       });
//       if (response.status >= 200 && response.status < 300) {
//         return response?.data?.recordset;
//       } else {
//         throw Error(`Error: ${response.status}`);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const initialState = {
  preloader: false,
  listFlowers: [],
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    // //////////////// getMainProd
    // builder.addCase(getMainProd.fulfilled, (state, action) => {
    //   state.preloader = false;
    //   state.listFlowers = action.payload;
    // });
    // builder.addCase(getMainProd.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.preloader = false;
    // });
    // builder.addCase(getMainProd.pending, (state, action) => {
    //   state.preloader = true;
    // });
  },
  reducers: {},
});
export const {} = requestSlice.actions;

export default requestSlice.reducer;

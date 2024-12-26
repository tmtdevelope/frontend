// src/redux/slice/privatePaySlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { privatePay } from "../../actions/forms/privatePayActions";

const privatePaySlice = createSlice({
  name: "privatePay",
  initialState: {
    loading: false,
    success: null,
    error: null as unknown,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(privatePay.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(privatePay.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(privatePay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default privatePaySlice.reducer;

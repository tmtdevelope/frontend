// src/redux/slice/privatePaySlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { bookingNow } from "../../actions/forms/bookingNowActions";

const bookingNowSlice = createSlice({
  name: "bookingNow",
  initialState: {
    loading: false,
    success: null,
    error: null as unknown,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookingNow.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(bookingNow.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(bookingNow.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingNowSlice.reducer;

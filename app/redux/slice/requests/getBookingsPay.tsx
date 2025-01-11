import { createSlice } from "@reduxjs/toolkit";
import { getBookingsPay } from "../../actions/requests/getBookingsPay";

interface GetBookingsPayState {
  data: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: GetBookingsPayState = {
  data: null,
  status: "idle",
  error: null,
};

const getBookingsPaySlice = createSlice({
  name: "getBookingsPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsPay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getBookingsPay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getBookingsPay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const getBookingsPayReducer = getBookingsPaySlice.reducer;

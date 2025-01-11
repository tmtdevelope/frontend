import { createSlice } from "@reduxjs/toolkit";
import { getFreeQaute } from "../../actions/requests/getFreeQaute";

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

const getFreeQuateSlice = createSlice({
  name: "getBookingsPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFreeQaute.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getFreeQaute.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getFreeQaute.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const getFreeQuateReducer = getFreeQuateSlice.reducer;

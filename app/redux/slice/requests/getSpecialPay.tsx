import { createSlice } from "@reduxjs/toolkit";
import { getSpecialPay } from "../../actions/requests/getSpecialPay";
interface GetSpecialPayState {
  data: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: GetSpecialPayState = {
  data: null,
  status: "idle",
  error: null,
};
const getSpecialPaySlice = createSlice({
  name: "getSpecialPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpecialPay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getSpecialPay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getSpecialPay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const getSpecialPayReducer = getSpecialPaySlice.reducer;

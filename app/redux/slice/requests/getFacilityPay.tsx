import { createSlice } from "@reduxjs/toolkit";
import { getFacilityPay } from "../../actions/requests/getFacilityPay";
interface GetFacilityPayState {
  data: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: GetFacilityPayState = {
  data: null,
  status: "idle",
  error: null,
};
const getFacilityPaySlice = createSlice({
  name: "getFacilityPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFacilityPay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getFacilityPay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getFacilityPay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const getFacilityPayReducer = getFacilityPaySlice.reducer;

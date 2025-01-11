import { createSlice } from "@reduxjs/toolkit";
import { getInsurancePay } from "@/app/redux/actions/requests/getInsurancePay";
interface GetInsurancePayState {
  data: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: GetInsurancePayState = {
  data: null,
  status: "idle",
  error: null,
};
const getInsurancePaySlice = createSlice({
  name: "getInsurancePay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInsurancePay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getInsurancePay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getInsurancePay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const getInsurancePayReducer = getInsurancePaySlice.reducer;

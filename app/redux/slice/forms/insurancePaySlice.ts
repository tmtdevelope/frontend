import { createSlice } from "@reduxjs/toolkit";
import { insurancePay } from "../../actions/forms/insurancePayActions";

interface InsuranceState {
  formData: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InsuranceState = {
  formData: null,
  status: "idle",
  error: null,
};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insurancePay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(insurancePay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.formData = action.payload;
      })
      .addCase(insurancePay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default insuranceSlice.reducer;

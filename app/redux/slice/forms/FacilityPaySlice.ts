import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { facilityPay } from "../../actions/forms/facilityPayAction";

interface SpacialPayState {
  formData: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SpacialPayState = {
  formData: null,
  status: "idle",
  error: null,
};

const facilityPaySlice = createSlice({
  name: "facilityPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(facilityPay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(facilityPay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.formData = action.payload;
      })
      .addCase(facilityPay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default facilityPaySlice.reducer;

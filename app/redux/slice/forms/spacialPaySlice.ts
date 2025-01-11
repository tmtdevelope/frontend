import { createSlice } from "@reduxjs/toolkit";
import { spacialPay } from "../../actions/forms/spacialPayActions";

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

const spacialPaySlice = createSlice({
  name: "spacialPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(spacialPay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(spacialPay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.formData = action.payload;
      })
      .addCase(spacialPay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default spacialPaySlice.reducer;

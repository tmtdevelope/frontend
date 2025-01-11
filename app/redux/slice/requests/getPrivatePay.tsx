import { createSlice } from "@reduxjs/toolkit";
import { getPrivatePay } from "../../actions/requests/getPrivatePay";

interface GetPrivatePayState {
  data: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
const initialState: GetPrivatePayState = {
  data: null,
  status: "idle",
  error: null,
};

const getPrivatePaySlice = createSlice({
  name: "getPrivatePay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrivatePay.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPrivatePay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPrivatePay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const getPrivatePayReducer = getPrivatePaySlice.reducer;

// slices/users/resetPasswordSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordAction } from "../../actions/users/resetPasswordAction";

interface ResetPasswordState {
  loading: boolean;
  success: any;
  error: unknown;
}

const initialState: ResetPasswordState = {
  loading: false,
  success: null,
  error: null,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Reset Password
      .addCase(resetPasswordAction.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(resetPasswordAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(resetPasswordAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default resetPasswordSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { logoutAction } from "../../actions/users/logoutAction";

interface LogoutState {
  loading: boolean;
  success: boolean | null;
  error: string | null | unknown;
}

const initialState: LogoutState = {
  loading: false,
  success: null,
  error: null,
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default logoutSlice.reducer;

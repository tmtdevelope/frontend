import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../../actions/users/logn";
interface AuthState {
  loading: boolean;
  success: any;
  error: unknown;
  user: any | null;
}

const initialState: AuthState = {
  loading: false,
  success: null,
  error: null,
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
        state.user = action.payload.data;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;

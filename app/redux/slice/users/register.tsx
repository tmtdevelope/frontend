import { createSlice } from "@reduxjs/toolkit";
import { registerAction } from "../../actions/users/register";
interface RegisterState {
  loading: boolean;
  success: any;
  error: string | null | unknown;
}
const initialState: RegisterState = {
  loading: false,
  success: null,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getRegister } from "../../actions/users/getRegister";

interface RegisterState {
  loading: boolean;
  error: string | null | unknown;
  register: any | null;
}

const initialState: RegisterState = {
  loading: false,
  error: null,
  register: null,
};

export const getRegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegister.fulfilled, (state, action) => {
        state.register = action.payload;
        state.loading = false;
      })
      .addCase(getRegister.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default getRegisterSlice.reducer;

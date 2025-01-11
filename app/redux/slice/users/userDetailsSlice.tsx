import { createSlice } from "@reduxjs/toolkit";
import { getUserDetailsAction } from "../../actions/users/getUserDetailsAction";
import { logoutAction } from "../../actions/users/logoutAction";

interface UserDetailsState {
  loading: boolean;
  user: any | null;
  error: unknown;
}

const initialState: UserDetailsState = {
  loading: false,
  user: null,
  error: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetailsAction.pending, (state: UserDetailsState) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(
        getUserDetailsAction.fulfilled,
        (state: UserDetailsState, action: { payload: { data: any } }) => {
          state.loading = false;
          state.user = action.payload?.data;
        },
      )
      .addCase(
        getUserDetailsAction.rejected,
        (state: UserDetailsState, action: { payload: unknown }) => {
          state.loading = false;
          state.error = action.payload;
        },
      )
      .addCase(logoutAction.fulfilled, (state: UserDetailsState) => {
        state.user = null;
      });
  },
});

export default userDetailsSlice.reducer;

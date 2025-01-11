import { createSlice } from "@reduxjs/toolkit";
import { updateUserAction } from "../../actions/users/updateUserAction";

interface UserState {
  users: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // تحديث المستخدم
    builder.addCase(updateUserAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
    });
    builder.addCase(updateUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

// تصدير الـ reducer
export default updateUserSlice.reducer;

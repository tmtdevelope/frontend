import { createSlice } from "@reduxjs/toolkit";
import { deleteUserAction } from "../../actions/users/deleteUserAction";

// تعريف واجهة لحالة المستخدمين
interface UserState {
  users: any[]; // يمكنك استبدال any بنوع المستخدم (User) إذا كان لديك واجهة محددة
  loading: boolean;
  error: string | null;
}

// الحالة الابتدائية
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// إنشاء الـ slice لحذف المستخدم
const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // حذف المستخدم
    builder.addCase(deleteUserAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(deleteUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

// تصدير الـ reducer
export default deleteUserSlice.reducer;

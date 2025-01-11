import api from "@/app/common/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// إنشاء action للـ Logout
export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/user-logout");
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  },
);

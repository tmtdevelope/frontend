import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const resetPasswordAction = createAsyncThunk(
  "users/resetPassword",
  async (data: { email: string; newPassword: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/reset-password", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Reset failed");
    }
  },
);

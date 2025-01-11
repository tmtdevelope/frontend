import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const loginAction = createAsyncThunk(
  "users/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/user-login", data);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  },
);

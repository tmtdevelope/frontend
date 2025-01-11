import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const registerAction = createAsyncThunk(
  "users/register",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

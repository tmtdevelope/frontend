import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const getRegister = createAsyncThunk(
  "users/register",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/get-register");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

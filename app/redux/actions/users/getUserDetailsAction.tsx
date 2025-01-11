import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const getUserDetailsAction = createAsyncThunk(
  "users/getUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("auth/get-user");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user details",
      );
    }
  },
);

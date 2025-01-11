import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const deleteUserAction = createAsyncThunk(
  "users/deleteUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/auth/delete-user/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

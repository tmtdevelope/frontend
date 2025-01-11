import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const updateUserAction = createAsyncThunk(
  "users/updateUser",
  async (
    data: { _id: string; status: string; role: string },
    { rejectWithValue },
  ) => {
    console.log("data", data);
    try {
      console.log("Sending data to backend:", data);
      const response = await api.put("/auth/update-user", data);
      return response.data;
    } catch (error: any) {
      console.error("Error in updateUserAction:", error);
      return rejectWithValue(error.response.data);
    }
  },
);

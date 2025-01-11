import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const fetchAllData = createAsyncThunk(
  "requests/fetchAllData",
  async () => {
    try {
      const response = await api.get("/all-request");
      return response.data;
    } catch (error) {
      // Return only the error message or any serializable data
      return { message: (error as Error).message || "Something went wrong" };
    }
  },
);

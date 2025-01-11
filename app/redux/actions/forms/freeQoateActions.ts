import api from "@/app/common/api"; // تأكد من مسار الـ api الصحيح
import { createAsyncThunk } from "@reduxjs/toolkit";

export const freeQoute = createAsyncThunk(
  "freeQoate/freePay",
  async (formData: Record<string, any>, { rejectWithValue }) => {
    try {
      const response = await api.post("/free-qoate", formData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

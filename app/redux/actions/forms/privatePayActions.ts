// src/redux/actions/privatePayActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

// Async Thunk
export const privatePay = createAsyncThunk(
  "privatePay/submitForm",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await api.post("/private-pay", formData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  },
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const insurancePay = createAsyncThunk(
  "insurance/submitForm",
  async (formData: Record<string, any>, { rejectWithValue }) => {
    try {
      const response = await api.post("/insurance-pay", formData);
      return response.data; // إرجاع البيانات المستلمة من الخادم
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(
          error.response.data.message || "Error submitting form",
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

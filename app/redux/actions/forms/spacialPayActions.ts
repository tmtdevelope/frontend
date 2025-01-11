import api from "@/app/common/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const spacialPay = createAsyncThunk(
  "spacialPay/submitForm",
  async (formData: Record<string, any>, { rejectWithValue }) => {
    try {
      const response = await api.post("/spacial-pay", formData); // إرسال الطلب
      return response.data; // البيانات المستلمة من الخادم
    } catch (error: any) {
      // معالجة الخطأ بشكل جيد
      if (error.response && error.response.data) {
        return rejectWithValue(
          error.response.data.message || "Error submitting the form",
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

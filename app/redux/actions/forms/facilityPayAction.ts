import api from "@/app/common/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const facilityPay = createAsyncThunk(
  "facility/facilityPay",
  async (formData: Record<string, any>, { rejectWithValue }) => {
    try {
      const response = await api.post("/facility-pay", formData); // إرسال الطلب
      return response.data; // البيانات المستلمة من الخادم
    } catch (error: any) {
      return rejectWithValue(error.message); // إرجاع رسالة الخطأ بشكل جيد
    }
  },
);

import api from "@/app/common/api"; // تأكد من مسار الـ api الصحيح
import { createAsyncThunk } from "@reduxjs/toolkit";

// الأكشن الخاص بإرسال البيانات
export const freeQoute = createAsyncThunk(
  "freeQoate/freePay", // اسم الأكشن
  async (formData: Record<string, any>, { rejectWithValue }) => {
    try {
      const response = await api.post("/free-qoate", formData); // إرسال البيانات عبر API
      return response.data; // إرجاع البيانات من الـ response
    } catch (error: any) {
      return rejectWithValue(error.message); // إرجاع رسالة الخطأ إذا فشل الطلب
    }
  }
);

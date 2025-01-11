import { createSlice } from "@reduxjs/toolkit";
import { freeQoute } from "../../actions/forms/freeQoateActions";

interface FreePayState {
  formData: Record<string, any> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FreePayState = {
  formData: null,
  status: "idle",
  error: null,
};

const freePaySlice = createSlice({
  name: "freePay", // اسم الـ slice
  initialState, // الحالة الأولية
  reducers: {}, // هنا لم نحتاج لأي reducers إضافية لأننا سنعتمد على الـ async thunk
  extraReducers: (builder) => {
    builder
      .addCase(freeQoute.pending, (state) => {
        state.status = "loading"; // عندما يبدأ الطلب
        state.error = null;
      })
      .addCase(freeQoute.fulfilled, (state, action) => {
        state.status = "succeeded"; // عند النجاح
        state.formData = action.payload; // حفظ البيانات المرسلة من الخادم
      })
      .addCase(freeQoute.rejected, (state, action) => {
        state.status = "failed"; // عند الفشل
        state.error = action.payload as string; // حفظ رسالة الخطأ
      });
  },
});

export default freePaySlice.reducer; // تصدير الـ reducer

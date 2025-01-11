import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const getSpecialPay = createAsyncThunk(
  "getSpecialPay/submitForm",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/spacial-pay");
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

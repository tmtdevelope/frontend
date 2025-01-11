import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const getInsurancePay = createAsyncThunk(
  "getInsurancePay/submitForm",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/insurance-pay");
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

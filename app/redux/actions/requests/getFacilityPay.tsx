import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

export const getFacilityPay = createAsyncThunk(
  "facility/getFacilityPay",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/facility-pay");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error Message");
    }
  },
);

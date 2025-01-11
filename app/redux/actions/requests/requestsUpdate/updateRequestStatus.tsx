import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/common/api";

// Define the payload type
interface UpdateRequestStatusPayload {
  category: string;
  requestId: string;
  newStatus: string;
  adjustments?: string;
  cancellationReason?: string;
}

export const updateRequestStatus = createAsyncThunk(
  "requests/updateRequestStatus",
  async (
    {
      category,
      requestId,
      newStatus,
      adjustments,
      cancellationReason,
    }: UpdateRequestStatusPayload,
    { rejectWithValue },
  ) => {
    try {
      const response = await api.put("/update-request", {
        newStatus,
        requestId,
        category,
        adjustments,
        cancellationReason,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: (error as Error).message || "Something went wrong",
      });
    }
  },
);

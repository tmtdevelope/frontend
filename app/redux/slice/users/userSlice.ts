import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "@/app/common/api";

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/forgot-password", { email });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  },
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (
    { token, newPassword }: { token: string; newPassword: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post("/auth/reset-password", {
        token,
        newPassword,
      });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  },
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (
    {
      currentPassword,
      newPassword,
    }: { currentPassword: string; newPassword: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post("/auth/change-password", {
        currentPassword,
        newPassword,
      });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  },
);

interface UserState {
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(
        forgotPassword.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          state.loading = false;
          state.message = action.payload.message;
        },
      )
      .addCase(
        forgotPassword.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error =
            typeof action.payload === "string"
              ? action.payload
              : "An unknown error occurred";
        },
      )

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(
        resetPassword.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          state.loading = false;
          state.message = action.payload.message;
        },
      )
      .addCase(
        resetPassword.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error =
            typeof action.payload === "string"
              ? action.payload
              : "An unknown error occurred";
        },
      )

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(
        changePassword.fulfilled,
        (state, action: PayloadAction<{ message: string }>) => {
          state.loading = false;
          state.message = action.payload.message;
        },
      )
      .addCase(
        changePassword.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error =
            typeof action.payload === "string"
              ? action.payload
              : "An unknown error occurred";
        },
      );
  },
});

export const { clearError, clearMessage } = userSlice.actions;
export default userSlice.reducer;

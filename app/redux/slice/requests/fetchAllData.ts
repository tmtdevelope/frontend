import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../../actions/requests/fetchAllData";
import { Request } from "@/app/types/use-places-autocomplete";

export interface RequestState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: RequestState = {
  data: [],
  loading: false,
  error: null,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(fetchAllData.rejected, (state, action: any) => {
        state.error = action.error?.message || "An unknown error occurred";
        state.loading = false;
      });
  },
});
export default requestsSlice.reducer;

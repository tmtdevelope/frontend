import { updateRequestStatus } from "@/app/redux/actions/requests/requestsUpdate/updateRequestStatus";
import { createSlice } from "@reduxjs/toolkit";

interface RequestState {
  data: any[];
  loading: boolean;
  error: string | unknown;
}
const initialState: RequestState = {
  data: [],
  loading: false,
  error: null,
};

const updateRequestStatusSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateRequestStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRequestStatus.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(updateRequestStatus.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default updateRequestStatusSlice.reducer;

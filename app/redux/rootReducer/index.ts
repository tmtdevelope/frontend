"use client";
import { combineReducers } from "@reduxjs/toolkit";
import spacialReducer from "../slice/forms/spacialPaySlice";
import insuranceReducer from "../slice/forms/insurancePaySlice";
import facilityReducer from "../slice/forms/FacilityPaySlice";
import privatePayReducer from "../slice/forms/privatePaySlice";
import freePaySlice from "../slice/forms/freeQoateSlice";
import bookingNowSlice from "../slice/forms/bookingNowSlice";
import { getBookingsPayReducer } from "../slice/requests/getBookingsPay";

const rootReducer = combineReducers({
  // Add request from client
  spacial: spacialReducer,
  insurance: insuranceReducer,
  facility: facilityReducer,
  private: privatePayReducer,
  free: freePaySlice,
  booking: bookingNowSlice,
  // get request
  bookingPay: getBookingsPayReducer,
});

export default rootReducer;

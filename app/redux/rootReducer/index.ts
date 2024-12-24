"use client";
import { combineReducers } from "@reduxjs/toolkit";
import spacialReducer from "../slice/spacialPaySlice";
import insuranceReducer from "../slice/insurancePaySlice";
import facilityReducer from "../slice/FacilityPaySlice";
import privatePayReducer from "../slice/privatePaySlice";
import freePaySlice from "../slice/freeQoateSlice";
import bookingNowSlice from "../slice/bookingNowSlice";

const rootReducer = combineReducers({
  spacial: spacialReducer,
  insurance: insuranceReducer,
  facility: facilityReducer,
  private: privatePayReducer,
  free: freePaySlice,
  booking: bookingNowSlice,
});

export default rootReducer;

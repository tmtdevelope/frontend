"use client";

import { combineReducers } from "@reduxjs/toolkit";
import spacialReducer from "../slice/spacialPaySlice";
import insuranceReducer from "../slice/insurancePaySlice";
import facilityReducer from "../slice/FacilityPaySlice";
import privatePayReducer from "../slice/privatePaySlice";
import freePaySlice from "../slice/freeQoateSlice";
const rootReducer = combineReducers({
  spacial: spacialReducer,
  insurance: insuranceReducer,
  facility: facilityReducer,
  private: privatePayReducer,
  free: freePaySlice,
});

export default rootReducer;

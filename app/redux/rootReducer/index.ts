"use client";
import { combineReducers } from "@reduxjs/toolkit";

// Forms Slices
import spacialReducer from "../slice/forms/spacialPaySlice";
import insuranceReducer from "../slice/forms/insurancePaySlice";
import facilityReducer from "../slice/forms/FacilityPaySlice";
import privatePayReducer from "../slice/forms/privatePaySlice";
import freePaySlice from "../slice/forms/freeQoateSlice";
import bookingNowSlice from "../slice/forms/bookingNowSlice";

// Requests Slices
import { getBookingsPayReducer } from "../slice/requests/getBookingsPay";
import { getFreeQuateReducer } from "../slice/requests/getFreeQaute";
import { getPrivatePayReducer } from "../slice/requests/getPrivatePay";
import { getFacilityPayReducer } from "../slice/requests/getFacilityPay";
import { getSpecialPayReducer } from "../slice/requests/getSpecialPay";
import { getInsurancePayReducer } from "../slice/requests/getInsurancePay";
import updateRequestStatusSlice from "../slice/requests/requestsUpdate/updateRequestStatus";
import requestsReducer from "../slice/requests/fetchAllData";
// Users Slices
import loginSlice from "../slice/users/logn";
import registerSlice from "../slice/users/register";
import getRegisterSlice from "../slice/users/getRegister";
import updateUserSlice from "../slice/users/updateUserAction";
import deleteUserSlice from "../slice/users/deleteUserAction";
import userDetailsReducer from "../slice/users/userDetailsSlice";
import logoutSlice from "../slice/users/logoutSlice";
import resetPasswordSlice from "../slice/users/resetPasswordSlice";
import userSlice from "../slice/users/userSlice";
// Combine all reducers
const rootReducer = combineReducers({
  // Forms
  spacial: spacialReducer,
  insurance: insuranceReducer,
  facility: facilityReducer,
  private: privatePayReducer,
  free: freePaySlice,
  booking: bookingNowSlice,

  // Get Requests
  bookingPay: getBookingsPayReducer,
  freePay: getFreeQuateReducer,
  privatePay: getPrivatePayReducer,
  facilityPay: getFacilityPayReducer,
  spacialPay: getSpecialPayReducer,
  insurancePay: getInsurancePayReducer,
  requests: requestsReducer,

  // Update Requests
  updateRequestStatus: updateRequestStatusSlice,

  // Users
  login: loginSlice,
  register: registerSlice,
  getRegister: getRegisterSlice,
  updateUser: updateUserSlice,
  deleteUser: deleteUserSlice,
  userDetails: userDetailsReducer,
  logout: logoutSlice,
  usreManagePassword: userSlice,
});

export default rootReducer;

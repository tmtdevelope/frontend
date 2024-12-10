// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from '../rootReducer/index'; // Create rootReducer to combine your slices

const store = configureStore({
  reducer: rootReducer,
});

export default store;
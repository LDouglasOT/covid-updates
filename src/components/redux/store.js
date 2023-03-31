import { configureStore } from '@reduxjs/toolkit';
import CovidReducer from './feature/Covid';

const store = configureStore({
  reducer: {
    CovidReducer,
  },
});

export default store;

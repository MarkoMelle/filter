import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceListSlice';
import serviceAddReducer from './slices/serviceAddSlice';
import serviceFilterReducer from './slices/serviceFilterSlice';

export default configureStore({
  reducer: {
    servicesList: serviceReducer,
    serviceAdd: serviceAddReducer,
    serviceFilter: serviceFilterReducer,
  },
});



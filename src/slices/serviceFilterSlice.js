import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const serviceFilterSlice = createSlice({
  name: 'serviceFilter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return { ...state, filter: action.payload };
    }
  },
});

export const { changeFilter } = serviceFilterSlice.actions;

export default serviceFilterSlice.reducer;

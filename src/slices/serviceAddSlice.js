import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  price: '',
  isEdit: false,
  editItem: { name: '', price: '' },
};

const serviceAddSlice = createSlice({
  name: 'serviceAdd',
  initialState,
  reducers: {
    changeServiceField: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    setIsEdit: (state, action) => {
      return { ...state, isEdit: action.payload };
    },
    setEditItem: (state, action) => {
      return { ...state, editItem: action.payload };
    },
    reset: (state) => {
      return { ...state, editItem: { name: '', price: '' }, isEdit: false };
    },
  },
});

export const { changeServiceField, setIsEdit, setEditItem, reset } = serviceAddSlice.actions;

export default serviceAddSlice.reducer;

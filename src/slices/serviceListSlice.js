import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 1, name: 'Замена стекла', price: 21000 },
  { id: 2, name: 'Замена дисплея', price: 25000 },
];

const servicesListSlice = createSlice({
  name: 'servicesList',
  initialState,
  reducers: {
    addService: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ name, price }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
          },
        };
      },
    },
    removeService: (state, action) => {
      return state.filter((service) => service.id !== action.payload);
    },
    editService: (state, action) => {
      const { id, name, price } = action.payload;
      const existingService = state.find((service) => service.id === id);
      if (existingService) {
        existingService.name = name;
        existingService.price = price;
      }
    },
  },
});

export const { addService, removeService, editService } =
  servicesListSlice.actions;

export default servicesListSlice.reducer;

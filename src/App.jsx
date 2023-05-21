import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit, setEditItem, reset } from './slices/serviceAddSlice';
import { changeFilter } from './slices/serviceFilterSlice';

export default function App() {
  const dispatch = useDispatch();
  const { isEdit, editItem } = useSelector((state) => state.serviceAdd);
  const { filter } = useSelector((state) => state.serviceFilter);

  const handleReset = () => {
    dispatch(reset());
  };

  const handleEdit = (editItem) => {
    dispatch(setIsEdit(true));
    dispatch(setEditItem(editItem));
  };

  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <ServiceAdd value={editItem} isEdit={isEdit} onReset={handleReset} />
      <br />
      <Filter value={filter} onChange={handleChangeFilter} />
      <br />
      <ServiceList onEdit={handleEdit} filter={filter} />
    </>
  );
}

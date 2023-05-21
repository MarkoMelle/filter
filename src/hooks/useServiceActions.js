import { useDispatch } from 'react-redux';
import {
  addService,
  removeService,
  editService,
} from '../slices/serviceListSlice';
import { changeServiceField } from '../slices/serviceAddSlice';

const useServiceActions = () => {
  const dispatch = useDispatch();

  const add = (name, price) => dispatch(addService({ name, price }));
  const remove = (id) => dispatch(removeService(id));
  const changeField = (name, value) =>
    dispatch(changeServiceField({ name, value }));
  const edit = (id, name, price) => dispatch(editService({ id, name, price }));

  return { add, remove, changeField, edit };
};

export default useServiceActions;

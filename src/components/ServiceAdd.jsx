import React, { useEffect } from 'react';
import useServiceActions from '../hooks/useServiceActions';
import './ServiceAdd.css';
import { useSelector } from 'react-redux';

export default function ServiceAdd({
  value = { name: '', price: '' },
  isEdit = false,
  onReset,
}) {
  const { name, price } = useSelector((state) => state.serviceAdd);
  const { add, edit, changeField } = useServiceActions();

  useEffect(() => {
    changeField('name', value.name);
    changeField('price', value.price);
  }, [value]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    changeField(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEdit) {
      edit(value.id, name, parseInt(price));
      onReset();
      return;
    }
    add(name, parseInt(price));
    onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={name} required />
      <input
        name='price'
        onChange={handleChange}
        value={price}
        type='number'
        required
      />
      <button type='submit'>Save</button>
      {isEdit && (
        <button type='button' onClick={onReset}>
          Cancel
        </button>
      )}
    </form>
  );
}

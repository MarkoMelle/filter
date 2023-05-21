import React, { useState, useEffect } from 'react';
import useServiceActions from '../hooks/useServiceActions';
import './ServiceAdd.css';

export default function ServiceAdd({
  value = { name: '', price: '' },
  isEdit = false,
  onReset,
}) {
  const [item, setItem] = useState(value);
  const { add, edit, changeField } = useServiceActions();

  useEffect(() => {
    setItem(value);
  }, [value]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setItem((prev) => ({ ...prev, [name]: value }));
    changeField(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEdit) {
      edit(item.id, item.name, parseInt(item.price));
      onReset();
      return;
    }
    add(item.name, parseInt(item.price));
    setItem({ name: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} required />
      <input
        name='price'
        onChange={handleChange}
        value={item.price}
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
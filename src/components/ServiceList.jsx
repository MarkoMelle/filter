import React from 'react';
import useServiceList from '../hooks/useServiceList';
import useServiceActions from '../hooks/useServiceActions';

export default function ServiceList({ onEdit = () => {}, filter }) {
  const { items } = useServiceList();
  const { remove } = useServiceActions();

  const handleRemove = (id) => {
    remove(id);
  };

  const handleEdit = (id) => {
    const service = items.find((item) => item.id === id);
    if (service) {
      onEdit(service);
    }
  };

  return (
    <ul>
      {items
        .filter(
          (item) =>
            item.name.toLowerCase().includes(filter.toLowerCase()) ||
            filter.trim() === ''
        )
        .map((item) => (
          <li key={item.id}>
            {item.name} ${item.price}
            <button onClick={() => handleEdit(item.id)}>✎</button>
            <button onClick={() => handleRemove(item.id)}>✕</button>
          </li>
        ))}
    </ul>
  );
}

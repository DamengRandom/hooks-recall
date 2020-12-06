import React, { useEffect, useState } from 'react';

export default function ItemListComponent({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log('updating Items ...');
  }, [getItems]);

  return (
    <div>
      {items.map(item => <div key={item}>{item}</div>)}
    </div>
  );
};

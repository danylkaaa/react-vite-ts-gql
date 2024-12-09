import React, { useState, FC } from 'react';

type Item = {
  id: number;
  name: string;
};

type ItemListProps = {
  items: Item[];
};

const ItemList: FC<ItemListProps> = ({ items }) => {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const App: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  const incrementCounter = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <ItemList items={items} />
    </div>
  );
};

export default App;

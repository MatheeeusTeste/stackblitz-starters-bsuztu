import React, { useState } from 'react';
import Item from './Item';
import SearchBar from './SearchBar';

function ItemList() {
  const [items, setItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [newItem, setNewItem] = useState<string>(''); // 

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem(''); 
    }
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const markAsBought = (index: number) => {
    const newItems = [...items];
    newItems[index] = `${items[index]} (comprado)`;
    setItems(newItems);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <input
        type="text"
        placeholder="Digite o nome do item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        style={{ marginBottom: '0.5rem' }}
      />
      <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {filteredItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            onRemove={() => removeItem(index)}
            onMarkAsBought={() => markAsBought(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

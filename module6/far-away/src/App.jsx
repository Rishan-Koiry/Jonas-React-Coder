import { useState } from "react";
import "./App.css";

const initialItems = [];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  if (!items.length)
    return <p className="empty">✨ No items yet. Add something to start!</p>;

  return (
    <div>
      <div className="sort">
        <label>
          Sort by:{" "}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Input order</option>
            <option value="description">Description</option>
            <option value="packed">Packed status</option>
          </select>
        </label>
      </div>

      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) return null;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items, packed {packedItems} ({percentage}%)
      </em>
    </footer>
  );
}

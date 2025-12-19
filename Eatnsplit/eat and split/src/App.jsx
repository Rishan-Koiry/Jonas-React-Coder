import React, { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", image: "/p1.jpg", money: -100 },
  { id: 2, name: "Jane Smith", image: "/p2.jpg", money: 150 },
  { id: 3, name: "Alice Johnson", image: "/p3.jpg", money: -200 },
];

const App = () => {
  const [friends, setFriends] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [newFriend, setNewFriend] = useState({ name: "", image: "", money: 0 });

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };
  const handleAddFriend = (e) => {
    e.preventDefault();
    if (!newFriend.name || !newFriend.image) return;
    const friendToAdd = {
      ...newFriend,
      id: friends.length + 1,
      money: Number(newFriend.money),
    };
    setFriends([...friends, friendToAdd]);
    setNewFriend({ name: "", image: "", money: 0 });
    setShowForm(false);
  };
  const handelselectFriend = (id) => {
    <div></div>;
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Friends you Have ({friends.length})</h2>
      <div>
        {friends.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div>
              <h3>{item.name}</h3>
              <p style={{ color: item.money < 0 ? "red" : "green" }}>
                {item.money < 0
                  ? `You owe ${Math.abs(item.money)}`
                  : item.money === 0
                  ? "You are even"
                  : `${item.name} owes you ${item.money}`}
              </p>
            </div>
            <button>Select</button>
          </div>
        ))}
      </div>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Friend"}
      </button>

      {showForm && (
        <form onSubmit={handleAddFriend} style={{ marginTop: "20px" }}>
          <input
            type="text"
            name="name"
            placeholder="Friend's Name"
            value={newFriend.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newFriend.image}
            onChange={handleChange}
          />
          <input
            type="number"
            name="money"
            placeholder="Money"
            value={newFriend.money}
            onChange={handleChange}
          />
          <button type="submit">Add Friend</button>
        </form>
      )}
    </div>
  );
};

export default App;

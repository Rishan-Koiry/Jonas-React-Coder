import { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", image: "/p1.jpg", money: -100 },
  { id: 2, name: "Jane Smith", image: "/p2.jpg", money: 150 },
  { id: 3, name: "Alice Johnson", image: "/p3.jpg", money: 0 },
];

export default function App() {
  const [friends, setFriends] = useState(initialData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoPaid, setWhoPaid] = useState("me");

  const [newFriend, setNewFriend] = useState({
    name: "",
    image: "",
  });

  // ---------------- HELPERS ----------------
  const getMoneyText = (friend) => {
    if (friend.money < 0)
      return `You owe ${friend.name} $${Math.abs(friend.money)}`;
    if (friend.money > 0) return `${friend.name} owes you $${friend.money}`;
    return "You are even";
  };

  // ---------------- ADD FRIEND ----------------
  const handleAddFriend = (e) => {
    e.preventDefault();
    if (!newFriend.name || !newFriend.image) return;

    setFriends([
      ...friends,
      {
        id: crypto.randomUUID(),
        name: newFriend.name,
        image: newFriend.image,
        money: 0,
      },
    ]);

    setNewFriend({ name: "", image: "" });
    setShowForm(false);
  };

  // ---------------- SPLIT BILL ----------------
  const handleSplitBill = (e) => {
    e.preventDefault();

    const billValue = Number(bill);
    const myPay = Number(myExpense);
    const friendPay = billValue - myPay;

    if (!billValue || myPay > billValue) return;

    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id !== selectedFriend.id) return friend;

        let updatedMoney;
        if (whoPaid === "me") {
          updatedMoney = friend.money + friendPay;
        } else {
          updatedMoney = friend.money - myPay;
        }

        return { ...friend, money: updatedMoney };
      })
    );

    setBill("");
    setMyExpense("");
    setWhoPaid("me");
    setSelectedFriend(null);
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Friends ({friends.length})</h2>

        {/* FRIEND LIST */}
        <div className="space-y-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={friend.image}
                  alt={friend.name}                   className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{friend.name}</h3>
                  <p
                    className={`text-sm ${
                      friend.money < 0
                        ? "text-red-500"
                        : friend.money > 0
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {getMoneyText(friend)}
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedFriend(
                    selectedFriend?.id === friend.id ? null : friend
                  )
                }
                className="px-4 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                {selectedFriend?.id === friend.id ? "Close" : "Select"}
              </button>
            </div>
          ))}
        </div>

        {/* ADD FRIEND */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {showForm ? "Cancel" : "Add Friend"}
        </button>

        {showForm && (
          <form onSubmit={handleAddFriend} className="mt-4 grid gap-3">
            <input
              className="border p-2 rounded"
              placeholder="Friend name"
              value={newFriend.name}
              onChange={(e) =>
                setNewFriend({ ...newFriend, name: e.target.value })
              }
            />
            <input
              className="border p-2 rounded"
              placeholder="Image URL"
              value={newFriend.image}
              onChange={(e) =>
                setNewFriend({ ...newFriend, image: e.target.value })
              }
            />
            <button className="bg-blue-500 text-white py-2 rounded">Add</button>
          </form>
        )}

        {/* SPLIT BILL */}
        {selectedFriend && (
          <form
            onSubmit={handleSplitBill}
            className="mt-6 border-t pt-4 grid gap-3"
          >
            <h3 className="font-semibold text-lg">
              Split bill with {selectedFriend.name}
            </h3>

            <input
              className="border p-2 rounded"
              type="number"
              placeholder="Total bill"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />

            <input
              className="border p-2 rounded"
              type="number"
              placeholder="Your expense"
              value={myExpense}
              onChange={(e) => setMyExpense(e.target.value)}
            />

            <select
              className="border p-2 rounded"
              value={whoPaid}
              onChange={(e) => setWhoPaid(e.target.value)}
            >
              <option value="me">You paid</option>
              <option value="friend">{selectedFriend.name} paid</option>
            </select>

            <button className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
              Split Bill
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

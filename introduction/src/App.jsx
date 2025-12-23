import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]); // data রাখার জন্য
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // API data state এ রাখা
        setLoading(false); // loading বন্ধ
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <b>{user.name}</b> <br />
              Email: {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

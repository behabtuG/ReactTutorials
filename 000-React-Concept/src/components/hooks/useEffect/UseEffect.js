import React, { useState, useEffect } from "react";
import "./UseEffect.css";

function UseEffect() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="use-effect-container">
      {isLoading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="data-list">
          {users.map((user) => (
            <li key={user.id} className="data-item">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UseEffect;

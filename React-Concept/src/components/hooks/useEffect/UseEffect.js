import React, { useState, useEffect } from "react";
import "./UseEffect.css";

function UseEffect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function (if needed)
    };
  }, []); // Empty dependency array to run once after initial render

  return (
    <div className="data-fetching-container">
      {data ? (
        <ul className="data-list">
          {data.map((item) => (
            <li key={item.id} className="data-item">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
}

export default UseEffect;

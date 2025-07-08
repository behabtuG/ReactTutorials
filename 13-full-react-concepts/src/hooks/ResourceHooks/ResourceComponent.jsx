import React, { useState } from "react";
import useResource from "./useFetch";

const ResourceComponent = () => {
  const [resourceType, setResourceType] = useState("posts");

  const { data, loading, error } = useResource(
    `https://jsonplaceholder.typicode.com/${resourceType}`
  );

  return (
    <div>
      <h2>Resource Hook Example</h2>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {data &&
          data
            .slice(0, 5)
            .map((item) => <li key={item.id}>{item.name || item.title}</li>)}
      </ul>
    </div>
  );
};

export default ResourceComponent;

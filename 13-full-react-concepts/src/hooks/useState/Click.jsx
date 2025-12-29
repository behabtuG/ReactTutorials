import React, { useState } from "react";

const Click = () => {
  const click = useState("GeeksForGeeks");
  return (
    <div>
      <h6>Welcome to {click}</h6>
    </div>
  );
};

export default Click;

import { useState } from "react";

const ControlleredForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Name: ${name}`);
  };

  return (
    <div className="App">
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlleredForm;

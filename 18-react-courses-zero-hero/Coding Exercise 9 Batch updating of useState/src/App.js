import React from "react";

// Don't rename the "getRandomNumbers" component
function getRandomNumbers() {
  return [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
  ];
}

// Don't rename the "App" component
function App() {
  const [sum, setSum] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  // const [numbers, setNumbers] = React.useState(getRandomNumbers());
  const [numbers] = React.useState(getRandomNumbers());

  function handleSum() {
    setSum(0);
    numbers.forEach((number) => {
      setSum((prevSum) => prevSum + number);
    });
  }
  //or
  // function handleSum() {
  //   const total = numbers.reduce((acc, num) => acc + num, 0);
  //   setSum(total);
  // }

  return (
    <>
      <h2>Random numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <h3>Sum: {sum}</h3>
      <button onClick={handleSum}>Calculate sum</button>
      <button onClick={() => setSum(0)}>Reset</button>
    </>
  );
}

export default App;

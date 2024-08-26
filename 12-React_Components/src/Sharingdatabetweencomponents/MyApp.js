import { useState } from "react";
import { SButton } from "./Button";

export default function MyApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counters that update together</h1>
      <SButton count={count} onClick={handleClick} />
      <SButton count={count} onClick={handleClick} />
    </>
  );
}

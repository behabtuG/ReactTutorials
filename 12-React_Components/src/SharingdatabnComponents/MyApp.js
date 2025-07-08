import { useState } from "react";
import { Button } from "./button/Button";

export default function MyApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counters that update together</h1>
      <Button count={count} onClick={handleClick} />
      <br />
      <Button count={count} onClick={handleClick} />
    </>
  );
}

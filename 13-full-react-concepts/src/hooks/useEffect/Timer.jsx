import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h6>Timer Running...</h6>
      <h6>{seconds} seconds</h6>
    </div>
  );
}

export default Timer;

//? The useEffect hook starts an interval to update the seconds state every second.
//? The cleanup function ensures the interval is cleared when the component unmounts.

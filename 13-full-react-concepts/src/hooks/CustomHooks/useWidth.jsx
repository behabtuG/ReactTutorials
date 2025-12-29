import { useState, useEffect } from "react";

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWidth;
//? The custom hook useWidth encapsulates the logic for tracking the window’s width.
//? It reduces redundancy by reusing the logic across components.

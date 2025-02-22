//?this hook simplifies the process of writing responsive styles by providing a way to check if a given media
//? query matches the current viewport dimensions. it can be used to conditionally render components or apply
//? styles based on screen size or device characteristics
import React, { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

function UseMediaQueryExample() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <h2>UseMediaQuery Example</h2>
      <p>Is mobile: {isMobile ? "Yes" : "No"}</p>
    </div>
  );
}

export default UseMediaQueryExample;

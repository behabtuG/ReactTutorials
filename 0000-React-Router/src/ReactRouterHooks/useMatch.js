//? 4. useMatch
//? when you need to match a specific route pattern against the current location, useMatch is the hook the use.
//? it returns the match object if the pattern matches, or null it doesn't.

import { useMatch } from "react-router-dom";

const match = useMatch("/profile/:id");
if (match) {
  console.log("Profile ID: " + match.id);
}

//? in this example, useMatch checks if the current URL matches the /profile/:id pattern and, is so, logs the profile ID.

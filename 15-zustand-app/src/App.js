import React from "react";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <Settings />
      <PostList />
    </div>
  );
}

export default App;

import React from "react";
import useUserStore from "../stores/userStore";

function UserProfile() {
  const { user, updateUser } = useUserStore();

  return (
    <div>
      <h2>
        {user.name} ({user.age})
      </h2>
      <button onClick={() => updateUser({ age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

export default UserProfile;

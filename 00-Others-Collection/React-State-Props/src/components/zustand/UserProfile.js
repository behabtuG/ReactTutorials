const useUserStore = create((set) => ({
  user: { name: "John", age: 25 },
  updateUser: (newData) =>
    set((state) => ({ user: { ...state.user, ...newData } })),
}));

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

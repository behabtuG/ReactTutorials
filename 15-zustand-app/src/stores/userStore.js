import { create } from "zustand";

const useUserStore = create((set) => ({
  user: { name: "John", age: 25 },
  updateUser: (newData) =>
    set((state) => ({ user: { ...state.user, ...newData } })),
}));

export default useUserStore;

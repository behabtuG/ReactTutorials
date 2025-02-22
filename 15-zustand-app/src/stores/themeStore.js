import { create } from "zustand";
import { persist } from "zustand/middleware";

// Theme Store
const useThemeStore = create((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

// Persisted Dark Mode Store
const useUserSettings = create(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "user-settings" } // Saves to LocalStorage
  )
);

export { useThemeStore, useUserSettings };

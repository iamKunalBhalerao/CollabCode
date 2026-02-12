import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthState, UserData } from "../types/auth.types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // State
      user: null,
      isAuthenticated: false,

      // Actions
      login: (userData: UserData) =>
        set({
          user: userData,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      userData: (userData: UserData) => set({ user: userData }),
    }),
    {
      name: "auth-storage", // unique name for the item in localStorage
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const AuthApi = (set) => ({
  checking: false,
  errorMessage: "",
  status: "not-authenticated",
  user: null,
  token: "",
  setChecking: (value) => set({ checking: value }, false, "SET_CHECKING"),
  setErrorMessage: (value) => set({ errorMessage: value }, false, "SET_ERROR_MESSAGE"),
  setStatus: (value) => set({ status: value }, false, "SET_STATUS"),
  setUser: (value) => set({ user: value }, false, "SET_USER"),
  setToken: (value) => set((state) => {
    const newState = { token: value };
    if (value) {
      newState.status = "authenticated";
    } else {
      newState.status = "not-authenticated";
    }
    return newState;
  }, false, "SET_TOKEN"),
});

export const useAuthStore = create(
  devtools(
    persist(AuthApi, {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
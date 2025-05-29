import { create } from "zustand";

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
}

interface UserProfileState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserProfile = create<UserProfileState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

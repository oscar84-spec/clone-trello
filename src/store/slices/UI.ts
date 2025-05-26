import { create } from "zustand";

interface OpenSideBarState {
  isOpen: boolean;
  toggle: () => void;
}

interface ShowPasswordState {
  showPassword: boolean;
  toggle: () => void;
}

export const useToggleSideBar = create<OpenSideBarState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useShowPassword = create<ShowPasswordState>((set) => ({
  showPassword: false,
  toggle: () => set((state) => ({ showPassword: !state.showPassword })),
}));

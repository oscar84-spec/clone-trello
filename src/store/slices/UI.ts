import { create } from "zustand";

interface OpenSideBarState {
  isOpen: boolean;
  toggle: () => void;
}

export const useToggleSideBar = create<OpenSideBarState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

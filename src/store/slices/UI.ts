import { create } from "zustand";

interface OpenSideBarState {
  isOpen: boolean;
  toggle: () => void;
}

interface ShowPasswordState {
  showPassword: boolean;
  toggle: () => void;
}

interface OpenModalState {
  isOpen: boolean;
  toggle: () => void;
}

interface OpenModalListState {
  isOpen: boolean;
  toggle: () => void;
}

interface OpenModalCardState {
  isOpen: boolean;
  toggle: () => void;
}

interface OpenModalMenuAccountState {
  isOpen: boolean;
  handleToggle: () => void;
}

export const useToggleSideBar = create<OpenSideBarState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useShowPassword = create<ShowPasswordState>((set) => ({
  showPassword: false,
  toggle: () => set((state) => ({ showPassword: !state.showPassword })),
}));

export const useOpenModal = create<OpenModalState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useOpenModalList = create<OpenModalListState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useOpenModalCard = create<OpenModalCardState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useOpenModalMenuAccount = create<OpenModalMenuAccountState>(
  (set) => ({
    isOpen: false,
    handleToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  })
);

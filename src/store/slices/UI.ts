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

interface OpenDeleteBoardState {
  isOpen: boolean;
  handleToggle: () => void;
}

interface OpenDeleteListState {
  isOpen: boolean;
  handleToggle: () => void;
}

interface OpenDeleteCard {
  isOpen: boolean;
  handleToggle: () => void;
}

interface IdAndTitleState {
  id: string;
  title: string;
  boardId?: string;
  listId?: string;
  setId: (id: string) => void;
  setTitle: (title: string) => void;
  setBoardId: (id: string) => void;
  setListId: (id: string) => void;
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

export const useOpenDeleteBoard = create<OpenDeleteBoardState>((set) => ({
  isOpen: false,
  handleToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useIdAndTitle = create<IdAndTitleState>((set) => ({
  id: "",
  title: "",
  setId: (id) => set({ id }),
  setTitle: (title) => set({ title }),
  setBoardId: (id) => set({ boardId: id }),
  setListId: (id) => set({ listId: id }),
}));

export const useOpenDeleteList = create<OpenDeleteListState>((set) => ({
  isOpen: false,
  handleToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useOpenDeleteCard = create<OpenDeleteCard>((set) => ({
  isOpen: false,
  handleToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

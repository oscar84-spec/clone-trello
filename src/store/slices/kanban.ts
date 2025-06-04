import { create } from "zustand";
import type { Card } from "../../types/kanban";

interface BoardState {
  _id: string;
  title: string;
  userId: string;
  lists?: string[];
}

interface BoardStore {
  board: BoardState[];
  setBoard: (board: BoardState[]) => void;
  addBoard: (board: BoardState) => void;
}

interface BoardSelectedStore {
  boardSelected: BoardState | null;
  setBoardSelected: (board: BoardState | null) => void;
}

interface BoardId {
  boardId: string;
  setBoardId: (boardId: string) => void;
}

interface ListState {
  _id: string;
  title: string;
  cards?: Card[];
}

interface ListStore {
  list: ListState[];
  setList: (list: ListState[]) => void;
  addList: (list: ListState) => void;
  deletedList: (id: string) => void;
}

interface ListId {
  listId: string;
  setListId: (listId: string) => void;
}

export const useGetBoardByIdStore = create<BoardStore>((set) => ({
  board: [],
  setBoard: (board) => set({ board }),
  addBoard: (board) => set((state) => ({ board: [...state.board, board] })),
}));

export const useBoardSelected = create<BoardSelectedStore>((set) => ({
  boardSelected: null,
  setBoardSelected: (board) => set({ boardSelected: board }),
}));

export const useBoardIdSelected = create<BoardId>((set) => ({
  boardId: "",
  setBoardId: (boardId) => set({ boardId }),
}));

export const useListStore = create<ListStore>((set) => ({
  list: [],
  setList: (list) => set({ list }),
  addList: (list) => set((state) => ({ list: [...state.list, list] })),
  deletedList: (id) =>
    set((state) => ({
      list: state.list.filter((l) => l._id !== id),
    })),
}));

export const useListIdSelected = create<ListId>((set) => ({
  listId: "",
  setListId: (listId) => set({ listId }),
}));

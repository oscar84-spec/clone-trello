import { create } from "zustand";

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

export const useGetBoardByIdStore = create<BoardStore>((set) => ({
  board: [],
  setBoard: (board) => set({ board }),
  addBoard: (board) => set((state) => ({ board: [...state.board, board] })),
}));

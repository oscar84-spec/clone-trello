import { create } from "zustand";

interface CardState {
  _id: string;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
}

interface CardStore {
  cardsByListId: Record<string, CardState[]>; // ← clave por ID de lista
  setCardsForList: (listId: string, cards: CardState[]) => void;
  addCardToList: (listId: string, card: CardState) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  cardsByListId: {},

  setCardsForList: (listId, cards) =>
    set((state) => ({
      cardsByListId: {
        ...state.cardsByListId,
        [listId]: cards,
      },
    })),

  addCardToList: (listId, card) =>
    set((state) => ({
      cardsByListId: {
        ...state.cardsByListId,
        [listId]: [...(state.cardsByListId[listId] || []), card],
      },
    })),
}));

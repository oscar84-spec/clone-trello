import api from "./http";
import type { Board } from "../types/kanban";
import type { List } from "../types/kanban";
import type { Card } from "../types/kanban";
import type { ListIndex } from "../types/kanban";
import type { CardIndex } from "../types/kanban";
import type { CardIndexOverList } from "../types/kanban";

//Crear Tableros
export const createBoard = async (data: Board) => {
  return await api.post("/boards", data);
};

//Obtener Tableros por ID del usuario
export const getBoardsByUserId = async (id: string) => {
  return await api.get(`/boards/${id}`);
};

//Obtener Tableros por ID del Tablero
export const getBoardById = async (id: string) => {
  return await api.get(`/boards/${id}/kanban`);
};

//Crear Listas
export const createList = async (id: string, data: List) => {
  return await api.post(`/boards/${id}/lists`, data);
};

//Obtener Listas por ID del Tablero
export const getListsByBoardId = async (id: string) => {
  return await api.get(`/lists/kanban/${id}`);
};

//Crear Tarjetas
export const createCard = async (id: string, data: Card) => {
  return await api.post(`/boards/lists/${id}/cards`, data);
};

//Obtener las tarjetas dado el ID de la lista
export const getCardsByListId = async (id: string) => {
  return await api.get(`/cards/lists/${id}`);
};

//Reordenar las listas
export const reorderList = async (id: string, data: ListIndex) => {
  return await api.put(`/boards/${id}/lists/reorder`, data);
};

//Reordenar tarjetas dentro de una misma lista
export const reorderCardSameList = async (id: string, data: CardIndex) => {
  return await api.put(`/lists/${id}/cards/reorder`, data);
};

//Reordenar tarjetas entre listas
export const reorderCardDifferentList = async (data: CardIndexOverList) => {
  return await api.put("/lists/cards/move", data);
};

//Eliminar tableros
export const deleteBoards = async (id: string) => {
  return await api.delete(`/delete/boards/${id}`);
};

//Eliminar listas
export const deleteLists = async (id: string, boardId: string) => {
  return await api.delete(`/delete/boards/${boardId}/lists/${id}`);
};

//Eliminar tarjetas
export const deleteCards = async (id: string, listId: string) => {
  return await api.delete(`/delete/boards/lists/${listId}/cards/${id}`);
};

import api from "./http";
import type { Board } from "../types/kanban";
import type { List } from "../types/kanban";
import type { Card } from "../types/kanban";

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

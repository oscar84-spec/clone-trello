import api from "./http";
import type { Board } from "../types/kanban";

//Crear Tableros
export const createBoard = async (data: Board) => {
  return await api.post("/boards", data);
};

//Obtener Tableros
export const getBoardsByUserId = async (id: string) => {
  return await api.get(`/boards/${id}`);
};

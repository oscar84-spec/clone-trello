import api from "./http";
import type { ValidationFormLogin } from "../types";

//Iniciar Sesión

export const loginUser = async (data: ValidationFormLogin) => {
  try {
    return await api.post("login", data, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};

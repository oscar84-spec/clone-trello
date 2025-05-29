import api from "./http";
import type { ValidationFormLogin, ValidationForm } from "../types";

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

//Registrar un Usuario
export const registerUser = async (data: ValidationForm) => {
  return await api.post("/register", data, {
    withCredentials: true,
  });
};

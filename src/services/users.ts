import api from "./http";
import type { ValidationFormLogin, ValidationForm } from "../types";

//Iniciar Sesión
export const loginUser = async (data: ValidationFormLogin) => {
  try {
    return await api.post("/login", data, {
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

//Verificar Sesión
export const verifySession = async () => {
  try {
    const res = await api.get("/dashboard", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//Cerrar Sessión
export const logoutUser = async () => {
  try {
    return await api.post("/logout", {}, { withCredentials: true });
  } catch (error) {
    console.error(error);
  }
};

//Obtener perfil del usuario
export const getUserProfile = async () => {
  try {
    return await api.get("/dashboard", {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};

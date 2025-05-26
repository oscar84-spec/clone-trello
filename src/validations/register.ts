import type { ValidationForm } from "../types";

export const validationsRegister: ValidationForm = {
  name: {
    required: {
      value: true,
      message: "El nombre es requerido",
    },
    minLength: {
      value: 3,
      message: "El nombre debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "El nombre debe tener menos de 20 caracteres",
    },
  },
  lastName: {
    minLength: {
      value: 3,
      message: "El apellido debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "El apellido debe tener menos de 20 caracteres",
    },
  },
  email: {
    required: {
      value: true,
      message: "El correo electrónico es requerido",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "El correo electrónico no es valido",
    },
  },
  password: {
    required: {
      value: true,
      message: "La contraseña es requerida",
    },
    minLength: {
      value: 6,
      message: "Debe tener al menos 6 caracteres",
    },
    maxLength: {
      value: 20,
      message: "Debe tener menos de 20 caracteres",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
      message:
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
    },
  },
};

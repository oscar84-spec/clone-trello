import type { ValidationFormBoard } from "../../types";

export const validationBoard: ValidationFormBoard = {
  title: {
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
};

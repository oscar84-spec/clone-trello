import type { ValidationFormCard } from "../../types";

export const validationFormCard: ValidationFormCard = {
  title: {
    required: {
      value: true,
      message: "El título es requerido",
    },
    minLength: {
      value: 3,
      message: "El título debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 50,
      message: "El título debe tener máximo 50 caracteres",
    },
  },
  description: {
    required: {
      value: true,
      message: "La descripción es requerida",
    },
    minLength: {
      value: 3,
      message: "La descripción debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 200,
      message: "La descripción debe tener máximo 200 caracteres",
    },
  },
  priority: {
    required: {
      value: true,
      message: "La prioridad es requerida",
    },
  },
};

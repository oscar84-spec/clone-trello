import { FormDash, Input, Button } from "./index";
import { useForm } from "react-hook-form";
import type { ValidationFormBoard } from "../types";
import { validationBoard } from "../validations/board/board";
import { useOpenModal } from "../store/slices/UI";

const AddBoard = () => {
  const { toggle } = useOpenModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationFormBoard>();

  const onSubmit = (data: ValidationFormBoard) => {
    console.log(data);
    toggle();
    reset();
  };

  return (
    <FormDash title="Agregar Tablero" handleSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Nombre del Tablero"
          styles="placeholder:text-dashboard-text-color/50 text-dashboard-text-color"
          {...register("title", validationBoard.title)}
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          styles="w-full h-10 bg-dashboard-btn-primary-bg/20 text-dashboard-btn-primary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-primary-hover/20"
        >
          Crear Tablero
        </Button>
        <Button
          type="submit"
          styles="w-full h-10 bg-dashboard-btn-secondary-bg/20 text-dashboard-btn-secondary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover/20"
          onClick={toggle}
        >
          Cancelar
        </Button>
      </div>
    </FormDash>
  );
};

export default AddBoard;

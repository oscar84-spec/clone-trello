import { FormDash, Input, Button } from "./index";
import { useForm } from "react-hook-form";
import { validationBoard } from "../validations/board/board";
import { useOpenModal } from "../store/slices/UI";
import { useUserProfile } from "../store/slices/user";
import { createBoard } from "../services/kanban";
import { useGetBoardByIdStore } from "../store/slices/kanban";
import type { Board } from "../types/kanban";

const AddBoard = () => {
  const { isOpen, toggle } = useOpenModal();
  const { user } = useUserProfile();
  const { addBoard } = useGetBoardByIdStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Board>();

  const onSubmit = async (data: { title: string }) => {
    if (!user?._id) return;

    const boardData: Board = {
      userId: user._id,
      title: data.title,
    };

    try {
      const res = await createBoard(boardData);
      if (res) {
        addBoard(res.data);
        toggle();
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormDash
      title="Agregar Tablero"
      handleSubmit={handleSubmit(onSubmit)}
      isOpen={isOpen}
    >
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
          type="button"
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

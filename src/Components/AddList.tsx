import { FormDash, Input, Button } from "./index";
import { useOpenModalList } from "../store/slices/UI";
import { useForm } from "react-hook-form";
import { validationList } from "../validations/board/list";
import type { List } from "../types/kanban";
import { createList } from "../services/kanban";
import { useGetBoardByIdStore } from "../store/slices/kanban";
import { useBoardIdSelected } from "../store/slices/kanban";
import { useListStore } from "../store/slices/kanban";

const AddList = () => {
  const { isOpen, toggle } = useOpenModalList();
  const { boardId } = useBoardIdSelected();
  const { board } = useGetBoardByIdStore();
  const { addList } = useListStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<List>();

  const onSubmit = async (data: List) => {
    try {
      const idToFetch = boardId || board[0]._id;
      const res = await createList(idToFetch, data);
      if (res) {
        addList(res.data);
        toggle();
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormDash
      title="Agregar Lista"
      isOpen={isOpen}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Nombre de la Lista"
          styles="placeholder:text-dashboard-text-color/50 text-dashboard-text-color"
          {...register("title", validationList.title)}
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
          Crear Lista
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

export default AddList;

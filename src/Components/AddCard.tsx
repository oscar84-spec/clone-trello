import { FormDash, Input, Button, Badge } from "./index";
import { useOpenModalCard } from "../store/slices/UI";
import { priorities } from "../mockData/priority";
import { useForm } from "react-hook-form";
import { validationFormCard } from "../validations/board/card";
import { useListIdSelected } from "../store/slices/kanban";
import type { Card } from "../types/kanban";
import { createCard } from "../services/kanban";
import { useCardStore } from "../store/slices/cards";

const AddCard = () => {
  const { isOpen, toggle } = useOpenModalCard();
  const { listId } = useListIdSelected();
  const { addCardToList } = useCardStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Card>();

  const onSubmit = async (data: Card) => {
    try {
      const res = await createCard(listId, data);
      if (res) {
        addCardToList(listId, res.data);
        toggle();
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <FormDash
      title="Agregar Tarjeta"
      isOpen={isOpen}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Nombre de la tarjeta"
          styles="placeholder:text-dashboard-text-color/50 text-dashboard-text-color"
          {...register("title", validationFormCard.title)}
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-md text-dashboard-text-color/80 pointer-events-none"
        >
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full h-16 outline-none resize-none border-1 border-btn-primary-bg  focus:border-btn-primary-bg focus:ring-1 focus:ring-btn-primary-bg transition-colors ease-in-out duration-300 rounded-md p-2 text-dashboard-text-color"
          {...register("description", validationFormCard.description)}
        ></textarea>
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {priorities.map((priority, index) => (
          <div className="w-full flex items-center gap-3 " key={index}>
            <input
              type="radio"
              id={priority}
              value={priority}
              {...register("priority", validationFormCard.priority)}
            />
            <label htmlFor={priority}>
              <Badge priority={priority}>{priority}</Badge>
            </label>
          </div>
        ))}
        {errors.priority && (
          <span className="text-sm text-red-500">
            {errors.priority.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          styles="w-full h-10 bg-dashboard-btn-primary-bg/20 text-dashboard-btn-primary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-primary-hover/20"
        >
          Crear Tarjeta
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

export default AddCard;

import { Button, CardContent } from "./index";
import { useOpenModalCard } from "../store/slices/UI";
import { DeleteIcon } from "../assets/icons";
import { useListIdSelected } from "../store/slices/kanban";
import { useCardStore } from "../store/slices/cards";
import { getCardsByListId } from "../services/kanban";
import { useEffect } from "react";
import { useIdAndTitle } from "../store/slices/UI";
import { useOpenDeleteList } from "../store/slices/UI";
import "../assets/styles/scroll.css";
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Card } from "../types/kanban";

interface ListState {
  _id: string;
  title: string;
  cards?: Card[];
}

type ListContentProps = {
  item: ListState;
  boardId: string;
};

const ListContent = ({ item, boardId }: ListContentProps) => {
  const { toggle } = useOpenModalCard();
  const { setListId } = useListIdSelected();
  const { cardsByListId, setCardsForList } = useCardStore();
  const { setId, setTitle, setBoardId } = useIdAndTitle();
  const { handleToggle } = useOpenDeleteList();

  useEffect(() => {
    const getCards = async (id: string) => {
      try {
        const res = await getCardsByListId(id);
        if (res?.data) {
          setCardsForList(id, res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (item?._id) getCards(item._id);
  }, [item?._id, setCardsForList]);

  const cards = cardsByListId[item._id] || [];

  const handleAddCard = () => {
    setListId(item._id);
    toggle();
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item._id,
    data: {
      type: "LIST",
      item,
      listId: item._id,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isDragging) {
    return (
      <div
        className="w-full h-full shrink-0 rounded-md p-2 bg-dashboard-list-bg md:w-72 lista-container animate-pulse"
        ref={setNodeRef}
        style={style}
      >
        <div className="scroll overflow-y-auto lista flex flex-col gap-2">
          {/* -------------------------- TARJETAS -------------------------- */}
          {cards.map((c) => (
            <div
              key={c._id}
              className="w-full h-32 max-h-32 overflow-y-auto shrink-0 rounded-md p-2 bg-dashboard-card-bg flex flex-col gap-2 scroll animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  function deleteList(id: string, title: string) {
    setId(id);
    setTitle(title);
    setBoardId(boardId);
    handleToggle();
  }
  return (
    <div
      className="w-full h-full shrink-0 rounded-md p-2 bg-dashboard-list-bg md:w-72 lista-container"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="w-full flex justify-between items-center gap-2">
        <h3 className="text-md text-dashboard-text-color nombre pointer-events-none">
          {item.title}
        </h3>
        <Button type="button" onClick={() => deleteList(item._id, item.title)}>
          <DeleteIcon styles="text-dashboard-text-color size-5 border-dashboard-text-color border-1 rounded-full transition-colors ease-in-out duration-300 cursor-pointer hover:text-red-500 hover:border-red-500" />
        </Button>
      </div>
      <div className="scroll overflow-y-auto lista flex flex-col gap-2">
        <SortableContext
          items={cards.map((c) => c._id)}
          strategy={verticalListSortingStrategy}
        >
          {/* -------------------------- TARJETAS -------------------------- */}
          {cards.map((c) => (
            <CardContent key={c._id} cards={c} listId={item._id} />
          ))}
        </SortableContext>
      </div>
      <Button
        type="button"
        styles="w-full button-add h-8 bg-dashboard-btn-secondary-bg text-dashboard-btn-secondary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
        onClick={handleAddCard}
      >
        Agregar tarjeta
      </Button>
    </div>
  );
};

export default ListContent;

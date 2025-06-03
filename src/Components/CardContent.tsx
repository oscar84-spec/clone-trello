import { DeleteIcon } from "../assets/icons";
import { Badge } from "./index";
import "../assets/styles/scroll.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface Card {
  _id: string;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
}

type CardContentProps = {
  cards: Card;
  listId: string;
};
const CardContent = ({ cards, listId }: CardContentProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: cards._id,
    data: {
      type: "CARD",
      cards,
      listId,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  if (isDragging) {
    return (
      <div
        className="w-full h-32 max-h-32 overflow-y-auto shrink-0 rounded-md p-2 bg-dashboard-card-bg flex flex-col gap-2 scroll animate-pulse"
        ref={setNodeRef}
        style={style}
      ></div>
    );
  }

  return (
    <div
      className="w-full h-32 max-h-32 overflow-y-auto shrink-0 rounded-md p-2 bg-dashboard-card-bg flex flex-col gap-2 scroll"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="w-full flex justify-between items-center gap-2">
        <Badge priority={cards.priority}>{cards.priority}</Badge>
        <DeleteIcon styles="text-dashboard-text-color size-7 border-dashboard-text-color border-1 rounded-full transition-colors ease-in-out duration-300 cursor-pointer hover:text-red-500 hover:border-red-500" />
      </div>
      <h3 className="text-md text-dashboard-text-color font-medium pointer-events-none">
        {cards.title}
      </h3>
      <p className="text-sm text-dashboard-text-color/50 text-pretty">
        {cards.description}
      </p>
    </div>
  );
};

export default CardContent;

import { DeleteIcon } from "../assets/icons";
import { Badge } from "./index";
import "../assets/styles/scroll.css";
interface Card {
  _id: string;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
}

type CardContentProps = {
  cards: Card;
};
const CardContent = ({ cards }: CardContentProps) => {
  return (
    <div className="w-full h-32 max-h-32 overflow-y-auto shrink-0 rounded-md p-2 bg-dashboard-card-bg flex flex-col gap-2 scroll">
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

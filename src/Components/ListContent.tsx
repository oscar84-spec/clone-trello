import { Button, CardContent } from "./index";
import { useOpenModalCard } from "../store/slices/UI";
import { DeleteIcon } from "../assets/icons";
import { useListIdSelected } from "../store/slices/kanban";
import { useCardStore } from "../store/slices/cards";
import { getCardsByListId } from "../services/kanban";
import { useEffect } from "react";

interface ListState {
  _id: string;
  title: string;
  cards?: string[];
}

type ListContentProps = {
  item: ListState;
};

const ListContent = ({ item }: ListContentProps) => {
  const { toggle } = useOpenModalCard();
  const { setListId } = useListIdSelected();
  const { cardsByListId, setCardsForList } = useCardStore();

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

  return (
    <div className="w-full shrink-0 rounded-md p-2 bg-dashboard-list-bg md:w-72 lista-container">
      <div className="w-full flex justify-between items-center gap-2">
        <h3 className="text-md text-dashboard-text-color nombre pointer-events-none">
          {item.title}
        </h3>
        <DeleteIcon styles="text-dashboard-text-color size-5 border-dashboard-text-color border-1 rounded-full transition-colors ease-in-out duration-300 cursor-pointer hover:text-red-500 hover:border-red-500" />
      </div>
      <div className="overflow-y-auto lista flex flex-col gap-2">
        {/* -------------------------- TARJETAS -------------------------- */}
        {cards.map((c, index) => (
          <CardContent key={index} cards={c} />
        ))}
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

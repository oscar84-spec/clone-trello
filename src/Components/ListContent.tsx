import { Button, CardContent } from "./index";
import { useOpenModalCard } from "../store/slices/UI";
import { DeleteIcon } from "../assets/icons";

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
        <CardContent />
      </div>
      <Button
        type="button"
        styles="w-full button-add h-8 bg-dashboard-btn-secondary-bg text-dashboard-btn-secondary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
        onClick={toggle}
      >
        Agregar tarjeta
      </Button>
    </div>
  );
};

export default ListContent;

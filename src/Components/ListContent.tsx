import { Button, CardContent } from "./index";
import { useOpenModalCard } from "../store/slices/UI";

const ListContent = () => {
  const { toggle } = useOpenModalCard();
  return (
    <div className="w-full shrink-0 rounded-md p-2 bg-dashboard-list-bg md:w-72 lista-container">
      <h3 className="text-md text-dashboard-text-color nombre pointer-events-none">
        Nombre de la Lista
      </h3>
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

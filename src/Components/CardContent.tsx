import { DeleteIcon } from "../assets/icons";
import { Badge } from "./index";

const CardContent = () => {
  return (
    <div className="w-full shrink-0 rounded-md p-2 bg-dashboard-card-bg  flex flex-col gap-2">
      <div className="w-full flex justify-between items-center gap-2">
        <Badge priority="Normal">Urgente</Badge>
        <DeleteIcon styles="text-dashboard-text-color size-7 border-dashboard-text-color border-1 rounded-full transition-colors ease-in-out duration-300 cursor-pointer hover:text-red-500 hover:border-red-500" />
      </div>
      <h3 className="text-md text-dashboard-text-color font-medium pointer-events-none">
        Nombre de la tarjeta
      </h3>
      <p className="text-sm text-dashboard-text-color/50 text-pretty">
        Descripción
      </p>
    </div>
  );
};

export default CardContent;

import { Button, ListContent } from "./index";
import { useOpenModalList } from "../store/slices/UI";
import "../assets/styles/kanban.css";

type KanbanContentProps = { areas: string };
const KanbanContent = ({ areas }: KanbanContentProps) => {
  const { toggle } = useOpenModalList();
  return (
    <section
      className={`w-full h-full bg-dashboard-kanban-bg rounded-md p-2 flex flex-col gap-2 overflow-hidden ${areas}`}
    >
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl text-dashboard-text-color font-medium pointer-events-none">
          Nombre del Tablero
        </h3>
        <div className="flex  gap-2 items-center">
          <Button
            type="button"
            styles="w-max px-2 bg-dashboard-btn-primary-bg text-dashboard-btn-secondary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-primary-hover"
          >
            Compartir
          </Button>
          <Button
            type="button"
            styles="w-max px-2 bg-dashboard-btn-secondary-bg text-dashboard-btn-secondary-text cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
          >
            ...
          </Button>
        </div>
      </div>
      {/* -------------------------- KANBAN -------------------------- */}

      <section className="w-full h-full p-2 flex gap-5 overflow-x-auto">
        {/* -------------------------- LISTAS -------------------------- */}
        <ListContent />

        <Button
          type="button"
          styles="w-full h-8 bg-dashboard-btn-secondary-bg text-dashboard-btn-secondary-text shrink-0 md:w-68 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
          onClick={toggle}
        >
          Agregar lista
        </Button>
      </section>
    </section>
  );
};

export default KanbanContent;

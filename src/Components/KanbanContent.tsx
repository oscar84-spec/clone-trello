import { Button, ListContent } from "./index";
import { useOpenModalList } from "../store/slices/UI";
import "../assets/styles/kanban.css";
import "../assets/styles/scroll.css";
import { useState, useEffect } from "react";
import { useGetBoardByIdStore } from "../store/slices/kanban";
import { getBoardById } from "../services/kanban";
import { useBoardSelected } from "../store/slices/kanban";
import { useBoardIdSelected } from "../store/slices/kanban";
import { useListStore } from "../store/slices/kanban";
import { getListsByBoardId } from "../services/kanban";
import { reorderList } from "../services/kanban";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

interface ListState {
  _id: string;
  title: string;
  cards?: string[];
}

type KanbanContentProps = { areas: string };
const KanbanContent = ({ areas }: KanbanContentProps) => {
  const { toggle } = useOpenModalList();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { board } = useGetBoardByIdStore();
  const { boardSelected, setBoardSelected } = useBoardSelected();
  const { boardId } = useBoardIdSelected();
  const { list, setList } = useListStore();

  const ITEM_TYPES = {
    LIST: "LIST",
    CARD: "CARD",
  };

  const [activeList, setActiveList] = useState<ListState | null>(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 8 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { distance: 8 },
  });

  const sensors = useSensors(pointerSensor, touchSensor);

  //Cargar el primer tablero o el que seleccione el usuario
  useEffect(() => {
    const loadBoard = async () => {
      setLoading(true);
      setError(null);

      try {
        if (board.length === 0 && !boardId) {
          setError("No hay tableros disponibles");
          return;
        }

        const idToFetch = boardId || board[0]._id;
        const res = await getBoardById(idToFetch);
        setBoardSelected(res.data);
      } catch (error) {
        console.error(error);
        setError("Error al obtener tablero");
      } finally {
        setLoading(false);
      }
    };

    loadBoard();
  }, [board, boardId, setBoardSelected]);

  //Obtener las listas por ID del Tablero
  useEffect(() => {
    const getLists = async () => {
      const idToFetch = boardId || board[0]?._id;
      if (!idToFetch) return;
      try {
        const res = await getListsByBoardId(idToFetch);
        if (res) {
          setList(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getLists();
  }, [boardId, board, setList]);

  if (loading || error) {
    return (
      <div className="w-full h-full bg-dashboard-kanban-bg rounded-md p-2 flex flex-col gap-2 overflow-hidden">
        <p className="text-md font-medium text-text-light">
          {loading
            ? "Cargando tablero..."
            : error || "No hay tableros disponibles"}
        </p>
      </div>
    );
  }

  //Implementando Drag and Drop
  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "LIST") {
      setActiveList(event.active.data.current.item);
      return;
    }
  };

  const onDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    //Si el over no existe o el id del active es igual al id del over no hace nada
    if (!over || active.id === over.id) return;

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;

    if (activeType === ITEM_TYPES.LIST && overType === ITEM_TYPES.LIST) {
      //Recuperamos los índices de las listas
      const oldIndex = list.findIndex((item) => item._id === active.id);
      const newIndex = list.findIndex((item) => item._id === over.id);

      if (oldIndex === -1 || newIndex === -1) return;

      // Se reordenan las listas de manera local
      const newOrder = arrayMove(list, oldIndex, newIndex);
      setList(newOrder);

      const idToFetch = boardId || board[0]._id;
      await reorderList(idToFetch, { oldIndex, newIndex });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <section
        className={`w-full h-full bg-dashboard-kanban-bg rounded-md p-2 flex flex-col gap-2 overflow-hidden ${areas}`}
      >
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl text-dashboard-text-color font-medium pointer-events-none">
            {boardSelected?.title}
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

        <section className="w-full h-full p-2 flex gap-5 overflow-x-auto scroll">
          {/* -------------------------- LISTAS -------------------------- */}
          <SortableContext items={list.map((l) => l._id)}>
            {list.map((item) => (
              <ListContent item={item} key={item._id} />
            ))}
          </SortableContext>

          <Button
            type="button"
            styles="w-full h-8 bg-dashboard-btn-secondary-bg text-dashboard-btn-secondary-text shrink-0 md:w-68 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
            onClick={toggle}
          >
            Agregar lista
          </Button>
        </section>
      </section>
      <DragOverlay>
        {activeList && <ListContent item={activeList} />}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanContent;

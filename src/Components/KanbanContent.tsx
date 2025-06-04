import { Button, CardContent, ListContent, SkeletonKanban } from "./index";
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
import { reorderCardSameList } from "../services/kanban";
import { reorderCardDifferentList } from "../services/kanban";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useCardStore } from "../store/slices/cards";

interface ListState {
  _id: string;
  title: string;
  cards?: Card[];
}
interface Card {
  _id: string;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
  listId: string;
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
  const [activeCardId, setActiveCardId] = useState<Card | null>(null);
  const { cardsByListId, setCardsForList } = useCardStore();

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
          {loading ? (
            <SkeletonKanban />
          ) : (
            error || "No hay tableros disponibles"
          )}
        </p>
      </div>
    );
  }

  //Implementando Drag and Drop
  const onDragStart = (event: DragStartEvent) => {
    const { active } = event;

    if (active.data.current?.type === ITEM_TYPES.LIST) {
      setActiveList(active.data.current?.item);
      setActiveCardId(null);
      return;
    }

    if (active.data.current?.type === ITEM_TYPES.CARD) {
      const { cards, listId } = active.data.current;
      setActiveCardId({ ...cards, listId });
      setActiveList(null);
      return;
    }
  };

  const onDragOver = async (event: DragOverEvent) => {
    //Si activeList y overList existen, entonces quiere decir que ambas listas
    //tienen por lo menos una tarjeta y si además ambos son iguales, quiere
    //decir que estamos moviendo una tarjeta dentro de la misma lista
    //Pero si overList no existe, entonces la lista está vacía
    const { active, over } = event;
    if (!active || !over) return;

    //const activeType = active.data.current?.type;
    //const overType = over.data.current?.type;

    /* const activeCardId = active.id;
    const overCardId = over?.id;
    const activeListId = active.data.current?.listId;
    const overListId = over?.data.current?.listId;

    if (activeCardId === overCardId) return; */
    /* 
    //De una lista a otra
    if (overListId && activeListId !== overListId) {
      const activeListContainer = cardsByListId[activeListId];
      const overListContainer = cardsByListId[overListId];

      const oldIndex = activeListContainer.findIndex(
        (item) => item._id === activeCardId
      );

      const newIndex = overListContainer.findIndex(
        (item) => item._id === overCardId
      );

      if (oldIndex === -1 || newIndex === -1) return;

      const movingCard = activeListContainer[oldIndex];

      const updateActiveList = [...activeListContainer];
      updateActiveList.splice(oldIndex, 1);

      const updateOverList = [...overListContainer];

      const insertIndex = newIndex >= 0 ? newIndex : updateOverList.length;

      updateOverList.splice(insertIndex, 0, {
        ...movingCard,
      });
      setCardsForList(activeListId, updateActiveList);
      setCardsForList(overListId, updateOverList);
    } */
  };

  const onDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    //Si el over no existe o el id del active es igual al id del over no hace nada
    if (!over || active.id === over.id) return;

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;
    const activeListId = active.data.current?.listId;
    const overListId = over.data.current?.listId;

    //Se reordenan las listas
    if (activeType === ITEM_TYPES.LIST && overType === ITEM_TYPES.LIST) {
      console.log("Entro primero");
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

    //Se reordenan las tarjetas dentro de una misma lista
    if (
      activeType === ITEM_TYPES.CARD &&
      overType === ITEM_TYPES.CARD &&
      activeListId === overListId
    ) {
      const activeCardId = active.id;
      const overCardId = over?.id;

      const listContainer = cardsByListId[overListId];

      const oldIndex = listContainer.findIndex(
        (item) => item._id === activeCardId
      );

      const newIndex = listContainer.findIndex(
        (item) => item._id === overCardId
      );

      if (oldIndex === -1) return;

      const newOrder = arrayMove(listContainer, oldIndex, newIndex);
      setCardsForList(overListId, newOrder);

      const idToFetch = overListId;
      await reorderCardSameList(idToFetch, { oldIndex, newIndex });
    }

    //Se reordenan las tarjetas de una lista a otra
    if (
      activeListId !== overListId &&
      activeType === ITEM_TYPES.CARD &&
      overType === ITEM_TYPES.CARD
    ) {
      const activeListContainer = cardsByListId[activeListId];
      const overListContainer = cardsByListId[overListId];

      const oldIndex = activeListContainer.findIndex(
        (item) => item._id === active.id
      );

      const newIndex = overListContainer.findIndex(
        (item) => item._id === over.id
      );

      if (oldIndex === -1 || newIndex === -1) return;

      const movingCard = activeListContainer[oldIndex];
      const updateActiveList = [...activeListContainer];
      updateActiveList.splice(oldIndex, 1);

      const updateOverList = [...overListContainer];

      const insertIndex = newIndex >= 0 ? newIndex : updateOverList.length;

      updateOverList.splice(insertIndex, 0, {
        ...movingCard,
      });
      setCardsForList(activeListId, updateActiveList);
      setCardsForList(overListId, updateOverList);
      await reorderCardDifferentList({
        oldIndex,
        newIndex,
        activeListId,
        overListId,
      });
    }

    if (activeType === ITEM_TYPES.CARD && overType === ITEM_TYPES.LIST) {
      //Primero debemos verificar si la lista está vacía o se está agregando
      //tarjetas como último elemento de la lista

      const activeListContainer = cardsByListId[activeListId];
      const overListContainer = cardsByListId[overListId];

      const oldIndex = activeListContainer.findIndex(
        (item) => item._id === active.id
      );

      const newIndex = overListContainer.length;

      if (oldIndex === -1 || newIndex === -1) return;

      const movingCard = activeListContainer[oldIndex];
      const updateActiveList = [...activeListContainer];
      updateActiveList.splice(oldIndex, 1);

      const updateOverList = [...overListContainer];

      const insertIndex = newIndex >= 0 ? newIndex : updateOverList.length;

      updateOverList.splice(insertIndex, 0, {
        ...movingCard,
      });
      setCardsForList(activeListId, updateActiveList);
      setCardsForList(overListId, updateOverList);
      await reorderCardDifferentList({
        oldIndex,
        newIndex,
        activeListId,
        overListId,
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
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
        {activeList ? (
          <ListContent item={activeList} />
        ) : activeCardId ? (
          <CardContent cards={activeCardId} listId={activeCardId.listId} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanContent;

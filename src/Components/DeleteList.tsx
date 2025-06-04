import { Button } from "./index";
import { useOpenDeleteList } from "../store/slices/UI";
import { useIdAndTitle } from "../store/slices/UI";
import { deleteLists } from "../services/kanban";
import { useListStore } from "../store/slices/kanban";
import "../assets/styles/modal.css";

const DeleteList = () => {
  const { isOpen, handleToggle } = useOpenDeleteList();
  const { id, title, boardId } = useIdAndTitle();
  const { deletedList } = useListStore();

  const deleteList = async () => {
    try {
      const res = await deleteLists(id, boardId ?? "");
      if (res) {
        deletedList(id);
        handleToggle();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`menu fixed top-0 left-0 w-screen h-screen bg-stone-950/20 z-50 flex justify-center items-center 
        ${isOpen ? "show" : ""}`}
    >
      <div className="w-full max-w-72 h-max p-5 bg-dashboard-card-bg rounded-md flex flex-col gap-3">
        <span className="text-lg text-text-light">
          ¿Deseas eliminar la lista{" "}
          <span className="text-lg font-bold text-red-500">{title}</span> ?
        </span>
        <div className="w-full flex flex-col gap-3">
          <Button
            type="button"
            styles="w-full h-8 bg-red-500 text-text-light"
            onClick={deleteList}
          >
            Eliminar
          </Button>
          <Button
            type="button"
            styles="w-full h-8 bg-btn-primary-bg/50 text-btn-primary-text"
            onClick={handleToggle}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteList;

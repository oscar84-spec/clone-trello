import "../assets/styles/modal.css";
import { useOpenDeleteBoard } from "../store/slices/UI";
import { useIdAndTitle } from "../store/slices/UI";
import { Button } from "./index";
import { deleteBoards } from "../services/kanban";

const DeleteBoard = () => {
  const { isOpen, handleToggle } = useOpenDeleteBoard();
  const { id, title } = useIdAndTitle();

  const deleteBoard = async () => {
    try {
      const res = await deleteBoards(id);
      if (res) {
        window.location.reload();
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
          ¿Deseas eliminar el tablero{" "}
          <span className="text-lg font-bold text-red-500">{title}</span> ?
        </span>
        <div className="w-full flex flex-col gap-3">
          <Button
            type="button"
            styles="w-full h-8 bg-red-500 text-text-light"
            onClick={deleteBoard}
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

export default DeleteBoard;

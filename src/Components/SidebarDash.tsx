import {
  DashboardIcon,
  StarIcon,
  TeamIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  AddIcon,
} from "../assets/icons";
import { Button } from "./index";
import { useOpenModal } from "../store/slices/UI";
import { useGetBoardByIdStore } from "../store/slices/kanban";
import { useUserProfile } from "../store/slices/user";
import { useState, useEffect } from "react";
import { getBoardsByUserId } from "../services/kanban";
import "../assets/styles/scroll.css";

type SidebarDashProps = {
  areas: string;
};

const SidebarDash = ({ areas }: SidebarDashProps) => {
  const { toggle } = useOpenModal();
  const { user } = useUserProfile();
  const { board, setBoard } = useGetBoardByIdStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const getBoards = async () => {
      if (!user?._id) return;
      try {
        const res = await getBoardsByUserId(user?._id);
        if (!res) {
          alert("Error al obtener tableros");
        } else {
          setBoard(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getBoards();
  }, [setBoard, toggle, user]);

  return (
    <aside
      className={`hidden w-full bg-dashboard-sidebar-bg rounded-md p-2 md:flex flex-col gap-5 ${areas}`}
    >
      <div className="w-full flex items-center gap-2 pointer-events-none">
        <DashboardIcon styles="size-5 text-icon-color" />
        <span className="text-lg text-dashboard-text-color">Tableros</span>
      </div>
      <div className="w-full flex flex-col gap-2 pl-2 lg:pl-5">
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg hover:cursor-pointer"
        >
          <StarIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tableros Destacados
          </span>
        </Button>
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg hover:cursor-pointer"
        >
          <TeamIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tableros de Equipo
          </span>
        </Button>
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ArrowDownIcon styles="size-3 text-icon-color" />
          ) : (
            <ArrowRightIcon styles="size-3 text-icon-color" />
          )}
          <span className="text-sm text-dashboard-text-color">
            Tus tableros
          </span>
        </Button>
        {isOpen && (
          <div
            className={`w-full pl-4 lg:pl-7 scroll
           ${board?.length ?? 0 ? "h-max max-h-30 overflow-y-auto" : "h-0"} `}
          >
            {loading && (
              <span className="text-sm text-dashboard-text-color">
                Cargando...
              </span>
            )}
            {board?.map((b) => (
              <Button
                type="button"
                styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg hover:cursor-pointer"
                key={b._id}
              >
                <span className="text-sm text-dashboard-text-color">
                  {b.title}
                </span>
              </Button>
            ))}
          </div>
        )}
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg cursor-pointer"
          onClick={toggle}
        >
          <AddIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Crear Tablero
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default SidebarDash;

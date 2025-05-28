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

type SidebarDashProps = {
  areas: string;
};

const SidebarDash = ({ areas }: SidebarDashProps) => {
  const { toggle } = useOpenModal();
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
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
        >
          <StarIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tableros Destacados
          </span>
        </Button>
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
        >
          <TeamIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tableros de Equipo
          </span>
        </Button>
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
        >
          <ArrowDownIcon styles="size-3 text-icon-color" />

          <ArrowRightIcon styles="size-3 text-icon-color" />

          <span className="text-sm text-dashboard-text-color">
            Tus tableros
          </span>
        </Button>
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

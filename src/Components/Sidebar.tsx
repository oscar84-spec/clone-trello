import { Navbar, Button } from "./index";
import { navLinks } from "../mockData/navLinks";
import { useToggleSideBar } from "../store/slices/UI";

const Sidebar = () => {
  const { isOpen } = useToggleSideBar();

  return (
    <aside
      className={`w-full h-[calc(100vh-56px)] absolute top-14 left-0 bg-sidebar-bg flex flex-col justify-center items-center gap-10 ${
        isOpen
          ? "translate-x-0 opacity-100 transition-all ease-in-out duration-1000"
          : "translate-x-full opacity-0 transition-all ease-in-out duration-1000"
      }`}
    >
      <Navbar navLinks={navLinks} listStyle="flex flex-col space-y-5" />
      <div className=" flex flex-col items-center gap-3">
        <Button
          styles="w-full h-8 bg-btn-primary-bg text-btn-primary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-primary-hover"
          type="button"
        >
          Iniciar Sesión
        </Button>
        <Button
          styles="w-full h-8 bg-btn-secondary-bg text-btn-secondary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-secondary-hover"
          type="button"
        >
          Regístrate
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

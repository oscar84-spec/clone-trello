import { Header, Button, Sidebar, Presentation } from "../Components";
import { MenuIcon } from "../assets/icons";
import { useToggleSideBar } from "../store/slices/UI";

const Home = () => {
  const { isOpen } = useToggleSideBar();

  return (
    <main
      className={`w-full h-screen bg-body-bg overflow-x-hidden ${
        isOpen ? "overflow-y-hidden" : ""
      } `}
    >
      <Header styles="bg-header-bg relative">
        <div>
          <MenuIcon />
          <div className="hidden md:flex md:items-center md:gap-3 ">
            <Button
              styles="w-30 h-8 bg-btn-primary-bg text-btn-primary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-primary-hover"
              type="button"
            >
              Iniciar Sesión
            </Button>
            <Button
              styles="w-30 h-8 bg-btn-secondary-bg text-btn-secondary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-secondary-hover"
              type="button"
            >
              Regístrate
            </Button>
          </div>
        </div>
        <Sidebar />
      </Header>
      <Presentation />
    </main>
  );
};

export default Home;

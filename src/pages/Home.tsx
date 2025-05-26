import {
  Header,
  Button,
  Sidebar,
  Presentation,
  SectionLayaut,
} from "../Components";
import { MenuIcon } from "../assets/icons";
import { useToggleSideBar } from "../store/slices/UI";
import { cards } from "../mockData/features";

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
      <SectionLayaut
        title="Funciones para ayudar a tu equipo a triunfar"
        subtitle="Gestión de proyectos potente, flexible y sencilla."
      >
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                className="flex flex-col gap-2 p-5 border-1 border-text-color/30 rounded-md md:flex-1"
                key={index}
              >
                <Icon />
                <h3 className="text-xl text-text-color font-medium">
                  {card.title}
                </h3>
                <p className="text-md text-text-color/75 text-pretty">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionLayaut>
    </main>
  );
};

export default Home;

import {
  Header,
  Button,
  Sidebar,
  Presentation,
  SectionLayaut,
  Footer,
} from "../Components";
import { MenuIcon } from "../assets/icons";
import { useToggleSideBar } from "../store/slices/UI";
import { cards } from "../mockData/features";
import { plans } from "../mockData/pricing";

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
        styles="pb-20"
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
      <SectionLayaut
        title="Elige el plan perfecto para ti"
        subtitle="Ya seas un equipo pequeño o una gran organización, tenemos un plan que se adapta a tus necesidades."
        styles="bg-btn-primary-bg py-20"
        stylesTitle="text-text-light"
        stylesSubtitle="text-text-light/60"
      >
        <div className="flex flex-col gap-5 md:flex-row md:justify-between ">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                className="flex flex-col gap-2 p-5 rounded-md bg-body-bg md:flex-1 md:gap-3"
                key={index}
              >
                <h3 className="text-xl text-text-color font-bold md:text-3xl">
                  {plan.title}
                </h3>
                <p className="text-sm text-text-color/60 text-pretty md:text-lg">
                  {plan.description}
                </p>
                <span className="text-xl text-text-color font-bold md:text-3xl">
                  ${plan.price}
                </span>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature, index) => (
                    <li
                      className="flex items-center gap-3 text-md text-text-color text-pretty md:text-lg"
                      key={index}
                    >
                      <Icon /> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  styles="w-full h-10 bg-btn-secondary-bg text-text-light cursor-pointer transition-colors ease-in-out duration-300 hover:bg-btn-secondary-hover"
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </SectionLayaut>
      <Footer />
    </main>
  );
};

export default Home;

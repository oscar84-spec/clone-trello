import { Header, Button } from "../Components";
import { MenuIcon } from "../assets/icons";

const Home = () => {
  return (
    <main>
      <Header styles="bg-header-bg">
        <div>
          <MenuIcon />
          <div className="hidden md:flex md:items-center md:gap-3">
            <Button styles="bg-btn-primary-bg text-btn-primary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-primary-hover">
              Iniciar Sesión
            </Button>
            <Button styles="bg-btn-secondary-bg text-btn-secondary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-secondary-hover">
              Regístrate
            </Button>
          </div>
        </div>
      </Header>
    </main>
  );
};

export default Home;

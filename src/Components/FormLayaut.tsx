import { Header, Button, Sidebar } from "../Components";
import { MenuIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const FormLayaut = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#1f2a484c,transparent)]"></div>
      </div>
      <Header styles="bg-header-bg">
        <div>
          <MenuIcon />
          <div className="hidden md:flex md:items-center md:gap-3 ">
            <Link to="/login">
              <Button
                styles="w-full h-8 bg-btn-primary-bg text-btn-primary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-primary-hover"
                type="button"
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button
                styles="w-full h-8 bg-btn-secondary-bg text-btn-secondary-text transition-colors ease-in-out duration-300 hover:cursor-pointer hover:bg-btn-secondary-hover"
                type="button"
              >
                Regístrate
              </Button>
            </Link>
          </div>
        </div>
        <Sidebar />
      </Header>
    </>
  );
};

export default FormLayaut;

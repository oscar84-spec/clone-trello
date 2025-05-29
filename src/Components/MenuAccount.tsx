import { ArrowDownIcon, ArrowRightIcon, LogOut } from "../assets/icons";
import { Button } from "./index";
import "../assets/styles/modal.css";
import { useOpenModalMenuAccount } from "../store/slices/UI";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/users";
import { useUserProfile } from "../store/slices/user";
import { getUserProfile } from "../services/users";
import { useEffect, useState } from "react";

const MenuAccount = () => {
  const { isOpen, handleToggle } = useOpenModalMenuAccount();
  const { user, setUser } = useUserProfile();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  //Cerrar Sessión
  const handleLogOut = async () => {
    const res = await logoutUser();
    if (res) {
      navigate("/");
      handleToggle();
    }
  };

  //Obtener perfil del usuario
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await getUserProfile();
        setUser(res?.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getUserData();
  }, [setUser]);
  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No tienes acceso. Inicia sesión.</p>;
  console.log(user);
  return (
    <div
      className={`menu w-full h-max p-5 absolute top-14 right-0 flex flex-col gap-2 justify-center items-center rounded-md bg-dashboard-list-bg z-40 md:w-72 md:right-5 lg:right-10 xl:right-20 ${
        isOpen ? "show" : ""
      }`}
    >
      <span className="text-xl bg-dashboard-sidebar-bg rounded-full size-10 p-2 flex items-center justify-center text-dashboard-text-color/70 pointer-events-none">
        {user.name.charAt(0).toUpperCase()}
      </span>
      <hr className="border-1 border-text-light/20 w-full" />
      <div className="w-full flex flex-col gap-2">
        <span className="w-full text-md text-dashboard-text-color/70 hover:cursor-pointer">
          {user.name} {user.lastName}
        </span>
        <span className="w-full text-md text-dashboard-text-color/70 hover:cursor-pointer">
          {user.email}
        </span>
      </div>
      <hr className="border-1 border-text-light/20 w-full" />
      <Button
        type="button"
        styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg hover:cursor-pointer"
      >
        <ArrowDownIcon styles="size-3 text-icon-color" />

        <ArrowRightIcon styles="size-3 text-icon-color" />

        <span className="text-sm text-dashboard-text-color">Tus tableros</span>
      </Button>
      <hr className="border-1 border-text-light/20 w-full" />
      <Button
        type="button"
        styles="w-full h-10 pl-2 bg-transparent flex items-center justify-between gap-2 hover:bg-dashboard-sidebar-hover-bg hover:cursor-pointer"
        onClick={handleLogOut}
      >
        <span className="text-sm text-dashboard-text-color">Cerrar Sesión</span>
        <LogOut styles="size-5 text-icon-color" />
      </Button>
    </div>
  );
};

export default MenuAccount;

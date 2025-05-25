import "../styles/menu-hambur.css";
import { useToggleSideBar } from "../../store/slices/UI";

const MenuIcon = () => {
  const { isOpen, toggle } = useToggleSideBar();
  return (
    <div
      className={`menu-icon md:hidden ${isOpen ? "active" : ""}`}
      onClick={toggle}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default MenuIcon;

import { KanbanIcon } from "../assets/icons";
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <KanbanIcon styles="size-7 text-icon-color" />
      <span className="text-lg text-text-light/80 font-medium">TaskFlow</span>
    </div>
  );
};

export default Logo;

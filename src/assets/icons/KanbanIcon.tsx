import { LuKanban } from "react-icons/lu";

type KanbanIconProps = {
  styles?: string;
};

const KanbanIcon = ({ styles }: KanbanIconProps) => {
  return <LuKanban className={styles} />;
};

export default KanbanIcon;

import { LuUsers } from "react-icons/lu";

type TeamIconProps = {
  styles?: string;
};

const TeamIcon = ({ styles }: TeamIconProps) => {
  return <LuUsers className={`size-7 text-icon-color ${styles}`} />;
};

export default TeamIcon;

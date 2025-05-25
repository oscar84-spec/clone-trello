import { LuUsers } from "react-icons/lu";

type TeamIconProps = {
  styles?: string;
};

const TeamIcon = ({ styles }: TeamIconProps) => {
  return <LuUsers className={styles} />;
};

export default TeamIcon;

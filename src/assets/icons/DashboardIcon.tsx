import { RiDashboardFill } from "react-icons/ri";

type DashboardIconProps = {
  styles?: string;
};

const DashboardIcon = ({ styles }: DashboardIconProps) => {
  return <RiDashboardFill className={styles} />;
};

export default DashboardIcon;

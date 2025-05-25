import { FaAngleDown } from "react-icons/fa6";

type ArrowDownIconProps = {
  styles?: string;
};

const ArrowDownIcon = ({ styles }: ArrowDownIconProps) => {
  return <FaAngleDown className={styles} />;
};

export default ArrowDownIcon;

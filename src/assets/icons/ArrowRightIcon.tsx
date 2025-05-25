import { FaChevronRight } from "react-icons/fa6";

type ArrowRightIconProps = {
  styles?: string;
};
const ArrowRightIcon = ({ styles }: ArrowRightIconProps) => {
  return <FaChevronRight className={styles} />;
};

export default ArrowRightIcon;

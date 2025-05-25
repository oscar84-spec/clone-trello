import { FaEye } from "react-icons/fa";

type EyeIconProps = {
  styles?: string;
};

const EyeIcon = ({ styles }: EyeIconProps) => {
  return <FaEye className={styles} />;
};

export default EyeIcon;

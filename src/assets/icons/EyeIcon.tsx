import { FaEye } from "react-icons/fa";
import { useShowPassword } from "../../store/slices/UI";

type EyeIconProps = {
  styles?: string;
};

const EyeIcon = ({ styles }: EyeIconProps) => {
  const { toggle } = useShowPassword();
  return <FaEye className={styles} onClick={toggle} />;
};

export default EyeIcon;

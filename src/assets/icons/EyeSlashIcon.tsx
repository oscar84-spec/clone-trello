import { FaEyeSlash } from "react-icons/fa";
import { useShowPassword } from "../../store/slices/UI";

type EyeSlashIconProps = {
  styles?: string;
};

const EyeSlashIcon = ({ styles }: EyeSlashIconProps) => {
  const { toggle } = useShowPassword();
  return <FaEyeSlash className={styles} onClick={toggle} />;
};

export default EyeSlashIcon;

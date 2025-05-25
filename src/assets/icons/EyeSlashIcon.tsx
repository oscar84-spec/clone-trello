import { FaEyeSlash } from "react-icons/fa";

type EyeSlashIconProps = {
  styles?: string;
};

const EyeSlashIcon = ({ styles }: EyeSlashIconProps) => {
  return <FaEyeSlash className={styles} />;
};

export default EyeSlashIcon;

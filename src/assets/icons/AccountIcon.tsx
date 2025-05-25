import { FaUser } from "react-icons/fa";

type AccountIconProps = {
  styles?: string;
};

const AccountIcon = ({ styles }: AccountIconProps) => {
  return <FaUser className={styles} />;
};

export default AccountIcon;

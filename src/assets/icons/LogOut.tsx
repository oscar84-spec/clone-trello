import { IoIosLogOut } from "react-icons/io";
type LogOutProps = {
  styles?: string;
};

const LogOut = ({ styles }: LogOutProps) => {
  return <IoIosLogOut className={styles} />;
};

export default LogOut;

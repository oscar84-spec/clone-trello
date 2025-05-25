import { IoIosClose } from "react-icons/io";

type DeleteIconProps = {
  styles?: string;
};

const DeleteIcon = ({ styles }: DeleteIconProps) => {
  return <IoIosClose className={styles} />;
};

export default DeleteIcon;

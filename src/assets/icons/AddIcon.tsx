import { GoPlus } from "react-icons/go";

type AddIconProps = {
  styles?: string;
};

const AddIcon = ({ styles }: AddIconProps) => {
  return <GoPlus className={styles} />;
};

export default AddIcon;

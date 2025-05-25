import { CiStar } from "react-icons/ci";

type StarIconProps = {
  styles?: string;
};
const StarIcon = ({ styles }: StarIconProps) => {
  return <CiStar className={styles} />;
};

export default StarIcon;

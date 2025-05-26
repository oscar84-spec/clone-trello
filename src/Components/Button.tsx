type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
};

const Button = ({ children, styles, type }: ButtonProps) => {
  return (
    <button type={type} className={`rounded-md px-3 outline-none ${styles}`}>
      {children}
    </button>
  );
};

export default Button;

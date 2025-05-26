type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, styles, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`rounded-md px-3 outline-none ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
};

const Button = ({ children, styles }: ButtonProps) => {
  return (
    <button className={`rounded-md px-3 outline-none ${styles}`}>
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
};

const Button = ({ children, styles }: ButtonProps) => {
  return (
    <button className={`w-max h-8 rounded-md px-3 outline-none ${styles}`}>
      {children}
    </button>
  );
};

export default Button;

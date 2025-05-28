import { forwardRef } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  styles?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, styles, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-10 px-2 outline-none border-1 border-btn-primary-bg rounded-md focus:border-btn-primary-bg focus:ring-1 focus:ring-btn-primary-bg transition-colors ease-in-out duration-300 ${styles}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;

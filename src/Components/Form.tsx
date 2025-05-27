type FormProps = {
  title: string;
  handleSubmit: () => void;
  children: React.ReactNode;
};

const Form = ({ title, handleSubmit, children }: FormProps) => {
  return (
    <form
      className="w-full absolute top-16 p-5 md:w-md "
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl text-center font-medium text-text-color">
        {title}
      </h3>
      <fieldset className="flex flex-col gap-3 border-1 border-text-color/20 rounded-md mt-10 p-5 shadow-xl">
        <div className="flex flex-col gap-5">{children}</div>
      </fieldset>
    </form>
  );
};

export default Form;

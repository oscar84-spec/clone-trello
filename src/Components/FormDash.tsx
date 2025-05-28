import "../assets/styles/modal.css";

type FormDashProps = {
  children: React.ReactNode;
  handleSubmit: () => void;
  title: string;
  isOpen: boolean;
};

const FormDash = ({ children, handleSubmit, title, isOpen }: FormDashProps) => {
  return (
    <div
      className={`menu fixed top-0 left-0 w-screen h-screen bg-stone-950/20 flex justify-center items-center z-50 
        ${isOpen ? "show" : ""} `}
    >
      <form
        className={`w-72 h-max absolute top-1/2 left-1/2 transform -translate-1/2 p-5 rounded-md bg-dashboard-sidebar-bg flex flex-col gap-3 ${
          isOpen ? "show" : ""
        } `}
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl text-dashboard-text-color font-medium">
          {title}
        </h3>
        {children}
      </form>
    </div>
  );
};

export default FormDash;

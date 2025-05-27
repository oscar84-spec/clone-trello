type BadgeProps = {
  children: React.ReactNode;
  priority: "Urgente" | "Normal" | "Bajo";
};

const Badge = ({ children, priority }: BadgeProps) => {
  return (
    <div
      className={`h-max px-2 rounded-full text-sm font-bold pointer-events-none ${
        priority === "Urgente"
          ? "bg-red-200 text-red-500"
          : priority === "Normal"
          ? "bg-amber-200 text-amber-500"
          : "bg-green-200 text-green-500"
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;

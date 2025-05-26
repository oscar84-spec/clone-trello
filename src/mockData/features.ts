import { ListIcon, TeamIcon, CalendarIcon } from "../assets/icons";

type Cards = {
  icon: React.FC;
  title: string;
  description: string;
};

export const cards: Cards[] = [
  {
    icon: ListIcon,
    title: "Tableros y Listas",
    description:
      "Organiza el trabajo con tableros, listas y tarjetas. Añade detalles, fechas límite y archivos adjuntos.",
  },
  {
    icon: TeamIcon,
    title: "Colaboración en Equipo",
    description:
      "Trabaja en tiempo real con los miembros de tu equipo en cualquier proyecto.",
  },
  {
    icon: CalendarIcon,
    title: "Vista de Calendario",
    description:
      "Visualiza tus tareas y fechas límite en un formato de calendario claro.",
  },
];

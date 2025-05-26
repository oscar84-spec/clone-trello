import { CheckIcon } from "../assets/icons/";

type Plan = {
  icon: React.FC;
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
};

export const plans: Plan[] = [
  {
    icon: CheckIcon,
    title: "Gratis",
    description: "Para individuos o equipos pequeños que están comenzando",
    price: "0",
    features: [
      "Tableros Ilimitados",
      "Hasta 10 miembros",
      "Automatizaciones básicas",
    ],
    buttonText: "Comenzar",
  },
  {
    icon: CheckIcon,
    title: "Pro",
    description: "Para equipos en crecimiento que necesitan más funciones",
    price: "10",
    features: [
      "Todo lo de Gratis",
      "Miembros ilimitados",
      "Automatizaciones avanzadas",
      "Controles de administrador",
    ],
    buttonText: "Prueba gratis",
  },
  {
    icon: CheckIcon,
    title: "Empresa",
    description:
      "Para organizaciones que necesitan seguridad y soporte adicional",
    price: "30",
    features: [
      "Todo lo de Pro",
      "Seguridad nivel empresarial",
      "Soporte prioritario",
      "Integraciones personalizadas",
    ],
    buttonText: "Contactar ventas",
  },
];

import { Logo, Navbar } from "./index";
import { footerLinks } from "../mockData/footer";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-5 px-5 py-10 bg-footer-bg footer lg:px-10 xl:px-20">
      <div className="flex flex-col gap-3 logo">
        <Logo />
        <span className="text-md text-text-light/60 text-pretty">
          Organiza todo, juntos. TaskFlow ayuda a los equipos a avanzar en su
          trabajo.
        </span>
      </div>
      {footerLinks.map((item, index) => (
        <Navbar
          key={index}
          title={item.title}
          navLinks={item.links}
          listStyle="flex flex-col space-y-2 justify-center"
          gridArea={item.gridArea}
        />
      ))}
      <hr className="border-1 border-text-light/20 divider" />
      <span className="text-md text-text-light/60 text-pretty copyright">
        © 2024 TaskFlow. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;

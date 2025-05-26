import { Link } from "react-router-dom";
import type { NavLinks } from "../types";

type NavbarProps = {
  navStyle?: string;
  listStyle: string;
  navLinks: NavLinks;
  title?: string;
  gridArea?: string;
};

const Navbar = ({
  navStyle = "block",
  listStyle,
  navLinks,
  title,
  gridArea,
}: NavbarProps) => {
  return (
    <nav className={navStyle + " " + gridArea}>
      <h3 className="text-lg text-text-light/85 font-medium">{title}</h3>
      <ul className={listStyle}>
        {navLinks.map((link, index) => (
          <li
            className="w-max text-md text-text-light/80 transition-all ease-in-out duration-300 hover:text-text-light hover:scale-105"
            key={index}
          >
            <Link to="">{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

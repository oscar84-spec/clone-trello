import { Link } from "react-router-dom";
import type { NavLinks } from "../types";

type NavbarProps = {
  navStyle?: string;
  listStyle: string;
  navLinks: NavLinks;
  title?: string;
};

const Navbar = ({
  navStyle = "block",
  listStyle,
  navLinks,
  title,
}: NavbarProps) => {
  return (
    <nav className={navStyle}>
      <h3 className="text-lg text-text-light/85 font-medium">{title}</h3>
      <ul className={listStyle}>
        {navLinks.map((link, index) => (
          <li
            className="text-md text-text-light/80 transition-all ease-in-out duration-300 hover:text-text-light hover:scale-105"
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

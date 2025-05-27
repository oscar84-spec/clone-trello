import { Logo, Navbar } from "./index";
import { Link } from "react-router-dom";
import type { NavLinks } from "../types";

type HeaderProps = {
  styles?: string;
  children: React.ReactNode;
  navLinks: NavLinks;
};

const Header = ({ styles, children, navLinks }: HeaderProps) => {
  return (
    <header
      className={`w-full h-14 px-5 flex items-center justify-between lg:px-10 xl:px-20 z-50 fixed md:static ${styles} `}
    >
      <div className="flex items-center gap-5 lg:gap-10">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar
          navStyle="hidden md:block"
          listStyle="flex items-center space-x-5"
          navLinks={navLinks}
        />
      </div>
      {children}
    </header>
  );
};

export default Header;

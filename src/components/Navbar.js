import { Logo, Search } from "./";

export const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
};

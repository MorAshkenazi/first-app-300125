import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <a href="/" style={{ color: "red", backgroundColor: "yellow" }}>
        Home
      </a>
      <a className="nav-item" href="/contacts">
        Contacts
      </a>
    </>
  );
};

export default Navbar;

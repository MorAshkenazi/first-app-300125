import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <a href="/">Home</a>
      <a href="/contacts">Contacts</a>
    </>
  );
};

export default Navbar;

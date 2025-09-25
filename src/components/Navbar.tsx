import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <NavLink to="/" style={{ color: "red", backgroundColor: "yellow" }}>
        Home
      </NavLink>
      <NavLink className="nav-item" to="/products">
        Products
      </NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/register2">Register2</NavLink>
    </>
  );
};

export default Navbar;

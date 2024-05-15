import { Nav, NavItem, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar>
        header
      
      <NavbarBrand>Logo</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
            {/* 
      |_ UserName (empty component for now) 
      */}
        </Nav>
      </Navbar>
    </header>
  );
}

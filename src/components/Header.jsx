import {Container, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import NavUserInfos from "../features/user/NavUserInfos";

export default function Header() {
  
  return (
    <header>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="app-navbar" />
          <Navbar.Collapse id="app-navbar">
            <Nav>
              <Nav.Item>
                <NavLink to="/">
                  Accueil
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/profile">Profile</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <NavUserInfos />
        </Container>
      </Navbar>
    </header>
  );
}

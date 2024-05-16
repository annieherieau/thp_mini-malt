import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const userFirstname = useSelector((state) => state.user.firstname);
  console.log(userFirstname);
  return (
    <header>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="app-navbar" />
          <Navbar.Collapse id="app-navbar">
            <Nav className="me-auto gap-3">
              <Nav.Item>
                <NavLink className="active" to="/">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/profile">Profile</NavLink>
              </Nav.Item>
              <Nav.Item></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

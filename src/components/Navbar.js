import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark " expand="lg">
      <Navbar.Brand href="#home" className="text-light">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <Nav.Link as={Link} to="/" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-light">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/use-effect" className="text-light">
            Use Effect
          </Nav.Link>
          <Nav.Link as={Link} to="/products" className="text-light">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/carts" className="text-light">
            Carts
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-light">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100" height="35" className="d-inline-block align-top" alt="Goout logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#flight">Flight</Nav.Link>
            <Nav.Link href="#hotel">Hotel</Nav.Link>
            <Nav.Link href="#travel package">Travel Package</Nav.Link>
            <Nav.Link href="contact-us">Contact Us</Nav.Link>
          </Nav>
          <Button>My Account</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

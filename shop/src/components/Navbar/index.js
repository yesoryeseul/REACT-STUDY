import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="light" className="navbgcolor">
      <Container>
        <Navbar.Brand href="#home" className="nav">
          Apple
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="nav">
            스토어
          </Nav.Link>
          <Nav.Link href="#features" className="nav">
            Mac
          </Nav.Link>
          <Nav.Link href="#pricing" className="nav">
            iPad
          </Nav.Link>
          <Nav.Link href="#pricing" className="nav">
            iPhone
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

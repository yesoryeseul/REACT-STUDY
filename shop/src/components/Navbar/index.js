import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  let navigate = useNavigate();
  return (
    <Navbar variant="light" className="navbgcolor">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} className="nav">
          Apple
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/" className="home">
            Apple
          </Link> */}
          {/* <Link to="/detail" className="navLink">
            스토어
          </Link> */}
          <Nav.Link onClick={() => navigate("/detail")} className="nav">
            Store
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

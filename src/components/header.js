import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#home">sample form</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

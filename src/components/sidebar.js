import { Nav } from "react-bootstrap";

function AppSidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-dark text-white vh-100">
      <h4 className="mb-4">Form</h4>
      <Nav className="flex-column">
        <Nav.Link href="/shirt" className="text-white">
          T-Shirt
        </Nav.Link>
        <Nav.Link href="/human" className="text-white">
          Human
        </Nav.Link>
        <Nav.Link href="#contact" className="text-white">
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default AppSidebar;

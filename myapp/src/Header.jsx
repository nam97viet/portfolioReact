import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Nathan Tran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#experience">Experiences</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <a
              href="https://github.com/nam97viet"
              className="me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="github-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathantran2208/"
              className="me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="linkedin-icon" />
            </a>
            <Button variant="primary" href="#">CONNECT ME</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
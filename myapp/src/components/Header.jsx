import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home" onClick={handleNavClick}>Nathan Tran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link href="#home" onClick={handleNavClick}>HOME</Nav.Link>
            <Nav.Link href="#project" onClick={handleNavClick}>PROJECTS</Nav.Link>
            <Nav.Link href="#experience" onClick={handleNavClick}>EXPERIENCES</Nav.Link>
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
            <Button 
              variant="primary" 
              href="#connect"
              onClick={handleNavClick}
            >
              CONNECT ME
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
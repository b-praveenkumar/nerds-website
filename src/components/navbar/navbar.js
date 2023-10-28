import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import NerdsLogo from '../../assets/NERDS_logo.png';
import fb_icon from '../../assets/facebook-icon-black.png';
import instagram_icon from '../../assets/instagram-logo-black.png';
import mail_icon from '../../assets/mail-icon-black.png';
import './styles/navbar.css';

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="main-navbar-container">
        <Container className="left-navbar-container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown className="navbar-link" title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about/mission">Mission</NavDropdown.Item>
                <NavDropdown.Item href="/about/team">Team</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navbar-link" href="/programs">Programs</Nav.Link>
              <NavDropdown className="navbar-link" title="Get Involved" id="basic-nav-dropdown">
                <NavDropdown.Item href="/involve/volunteer">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="/involve/donate">Donate</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className="center-navbar-container">
          <Navbar.Brand class="brand-center" href="/home"><img class="navbar-logo" src={NerdsLogo} alt="NERDS logo"></img></Navbar.Brand>
        </Container>
        <Container className="right-navbar-container">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="right-navbar-nav">
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/inspiringtheinnernerd" target="_blank">
                  <img className="navbar-icons" src={instagram_icon} alt="Instagram Icon"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.facebook.com/InspiringtheinnerNERD" target="_blank">
                  <img className="navbar-icons" src={fb_icon} alt="Facebook Icon"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="mailto:coachtee@nerdnation.org" target="_blank">
                  <img className="navbar-icons" src={mail_icon} alt="Mail Icon"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Button id="donate-btn" variant="custom" href="/involve/donate">Donate</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
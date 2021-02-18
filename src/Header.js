import { React } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.svg'

function Header() {
  return (
    <Navbar className="nav" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container className="header">
        <Navbar.Brand href="/">
          <img src={logo}
            alt="Лого MonarhWebStudio"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <Nav.Link href="/contacts"> Contacts </Nav.Link>
            <Nav.Link href="/blog"> Blog </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
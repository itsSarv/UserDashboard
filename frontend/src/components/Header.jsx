import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">User Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Create Post</Nav.Link>
            <Nav.Link href="/all">All Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
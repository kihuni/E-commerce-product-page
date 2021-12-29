import{Navbar, Container,Nav} from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {cart} from '@fortawesome/fontawesome-svg-core'
const Header = () => {
    return (
        <div>
          <Navbar bg="light" expand="lg">
  <Container fixed="top">
    <Navbar.Brand href="#home">Sneakers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Collection</Nav.Link>
        <Nav.Link href="#link">Men</Nav.Link>
        <Nav.Link href="#link">Women</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
      <Nav>
       <FontAwesomeIcon icon={cart}/>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

export default Header

import React from 'react';
// import "../utils/stylesheets/header.scss";
// import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/img/rit_weblingo.png'



export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" className='navbartheme fixed top-0 px-4'>
            <Container>
                <Navbar.Brand href="/">
                    {/* <img src={logo} alt="Logo" className="d-inline-block align-top me-2 w-20 h-20 rounded-full" /> */}
                    <Nav.Link className='px-4 py-2' href="/">Rit weblingo</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className='px-6 ' href="Website">Website</Nav.Link>
                        <Nav.Link className='px-6 ' href="localization">Localization</Nav.Link>
                        <Nav.Link className='px-6 ' href="contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
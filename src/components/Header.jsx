import React from 'react';
// import "../utils/stylesheets/header.scss";
// import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/rit_weblingo.png'



export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" className='navbartheme pl-2'>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" className="d-inline-block align-top me-2 w-20 h-20 sm:w-10 sm:h-10 xs:w-10 xs:h-10 rounded-full" />
                    {/* <Nav.Link className='px-6' href="/">Rit weblingo</Nav.Link> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-end">
                        <Nav.Link className='px-6 ' href="Website">Website</Nav.Link>
                        <Nav.Link className='px-6 ' href="localization">Localization</Nav.Link>
                        <Nav.Link className='px-6 ' href="contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <div className="max-w-6xl xl:max-w-4xl lg:max-w-3xl md:max-w-xl sm:max-w-md xs:max-w-sm xxs:max-w-xs  my-0 mx-auto py-4 flex justify-between  items-center text-fuchsia-600">
                    <div className="">
                        <NavLink
                            to="/home">
                            <img className="w-20 h-20 rounded-full" src="../../../image/rit_weblingo.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="">
                        <nav>

                            <NavLink
                                to="/website"
                                className="pr-6"
                            >
                                Website
                            </NavLink>
                            <NavLink
                                to="/localization"
                                className="pr-6"
                            >
                                Localization
                            </NavLink>

                            
                            <NavLink
                                to="/contact"
                                className="pr-6"
                            >
                                Contact US
                            </NavLink>
                        </nav>
                    </div>
                </div> */}
        </>
    )
}
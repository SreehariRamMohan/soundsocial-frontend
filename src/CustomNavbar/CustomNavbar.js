import React, { useEffect, useState } from "react";
import { Nav, Navbar, Form, NavDropdown, FormControl, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import styles from './CustomNavbar.module.css';

function CustomNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to={"/home"}>{"Goodpods"}</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><Link to={"/sample/"}>{"Example Page"}</Link></Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Link #3</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <Nav.Link href="#home"><Link to={"/logout"}>{"Logout"}</Link></Nav.Link>

                    
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(CustomNavbar);



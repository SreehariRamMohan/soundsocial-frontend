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
                    <Nav.Link href="#home"><Link to={"/post/"}>{"Make Post"}</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <Nav.Link href="#home"><Link to={"/logout"}>{"Logout"}</Link></Nav.Link>


                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(CustomNavbar);



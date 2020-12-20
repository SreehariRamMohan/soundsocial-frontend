import React, { useEffect, useState } from "react";
import { Nav, Navbar, Form, NavDropdown, FormControl, Button } from "react-bootstrap";
import { NavLink, Link, withRouter } from "react-router-dom";

import styles from './CustomNavbar.module.css';

function CustomNavbar(props) {
  return (
      <Navbar collapseOnSelect className="mx-3 my-1" variant="light" expand="lg">

      <Navbar.Brand><Link to={"/home"}>{"Goodpods"}</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <NavLink to="/library" className="mx-2">
            <Button variant="outline-secondary">
              Library
            </Button>
          </NavLink>
        </Nav>
        <Form inline>
          <Nav.Link href="#home"><Link to={"/logout"}>{"Logout"}</Link></Nav.Link>
        </Form>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default withRouter(CustomNavbar);



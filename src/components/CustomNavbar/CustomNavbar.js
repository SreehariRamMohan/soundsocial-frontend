import React, { useEffect, useState } from "react";
import { Nav, Navbar, Form, NavDropdown, FormControl, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import styles from './CustomNavbar.module.css';

function CustomNavbar(props) {
  return (
      <Navbar collapseOnSelect className="mx-3 my-1" variant="light" expand="lg">

      <Navbar.Brand><Link to={"/home"}>{"Goodpods"}</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/post">Create Post</Nav.Link>
          <Nav.Link href="/library">Library</Nav.Link>

          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Likes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Following</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Posts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Followers</NavDropdown.Item>
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



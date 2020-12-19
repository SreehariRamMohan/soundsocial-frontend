import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Card, Container } from "react-bootstrap";

//components
import Navbar from "components/CustomNavbar/CustomNavbar.js"
import PostCard from "components/PostCard/"

function UserLibrary() {

  useEffect(() => {

  }, []);

  return (
    <div style={{width: "100%"}}>
      <Navbar />
      <center>
        <h1 className="display-3">
          Library
        </h1>
      </center>

      <Container fluid style={{width: "80%"}}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="My Clips">

            <PostCard></PostCard>

          </Tab>
          <Tab eventKey="profile" title="Saved">
            <Card></Card>
          </Tab>
        </Tabs>
      </Container>

    </div>
  );
}

export default UserLibrary;

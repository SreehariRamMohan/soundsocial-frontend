import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Card, Container } from "react-bootstrap";

import { useSelector } from "react-redux"
import { API_URL } from "../../Redux/constants"

//components
import Navbar from "components/CustomNavbar/CustomNavbar.js"
import PostCard from "components/PostCard/"
import ClipCard from "components/ClipCard/ClipCard.js"

import styles from './UserLibrary.module.css';


const axios = require("axios")

function UserLibrary() {

  const [clips, setClips] = useState([]);

  const mongo_id = useSelector(state => state.mongo_id)
  const jwt_token = useSelector((state) => state.jwt_token);

  useEffect(() => {
    const payload = {
      "mongo_id": mongo_id
    }
    axios.post(API_URL + "/getAllClips", payload)
      .then(res => {
        setClips(res.data["clips_data"])
      })
  }, [])

  function renderClipsTab(){
    return (
      <Tab eventKey="myclips" title="My Clips">
        <Container fluid >
          <center>
          {clips.map((value, index, arr) => {
            return <ClipCard 
              title={value.title}
              source_url={value.source_url}
              wavefile={value.gcs_wavefile}
              wavefile_image={value.gcs_wavefile_image}
              transcript={value.transcript}
            />
          })}
          </center>
        </Container>
      </Tab>
    );
  }

  function renderSavedPostsTab(){
    return (
      <Tab eventKey="savedposts" title="Saved Posts">
        <Container fluid>
          <PostCard 
            displayAddButton={false} 
          />
        </Container>
      </Tab>
    );
  }

  return (
    <div style={{width: "100%"}}>
      <Navbar />
      <center>
        <h1 className="display-3">
          Library
        </h1>
      </center>

      <Container fluid style={{width: "80%"}}>
        <Tabs defaultActiveKey="myclips" id="uncontrolled-tab-example">
          { renderClipsTab() }
          { 
          // renderSavedPostsTab() 
          }
        </Tabs>
      </Container>

    </div>
  );
}

export default UserLibrary;

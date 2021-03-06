import React, { useEffect, useState } from 'react';

// react-bootstrap css styling
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css';

//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { test_redux } from "Redux/actions"

//components
import Navbar from "components/CustomNavbar/CustomNavbar.js"
import PostCard from "components/PostCard/"
import MakePost from "components/MakePost/MakePost.js"
// import WaveForm from "components/WaveForm/WaveForm.js"
import { Container } from "react-bootstrap"
import { API_URL } from "../../Redux/constants"

//axios
const axios = require("axios")

function Home() {

  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(0);
  const jwt_token = useSelector((state) => state.jwt_token);

  const [feed, setFeed] = useState([])

  useEffect(() => {
    populateFeed()
  }, []);

  function populateFeed() {
    axios({
      method: "get",
      url: `${API_URL}/feed/10`,
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      }
    })
      .then((res) => {
        setFeed(res.data.posts)
      })
  }

  return (
    <div>
      <Navbar />

      <Container className="my-5 px-5 py-5 border rounded">
        <MakePost refresh={populateFeed} />
      </Container>
      <center>
        {
          feed.map((val, index, arr) => {
            return <PostCard displayAddButton={true}
              post_id={val["_id"]}
              post_title={val["title"]}
              clip_id={val["clip_id"]}
              caption={val["caption"]}
              username={val["username"]}
              timestamp={val["timestamp"]}
            />
          })
        }
      </center>
    </div>
  );
}

export default Home;

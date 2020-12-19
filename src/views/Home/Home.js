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
import { Container } from "react-bootstrap"

//axios
const axios = require("axios")

function Home() {

  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {

  }, []);

  return (
    <div>
      <Navbar />

      <Container className="my-5 px-5 py-5 border rounded">
        <MakePost /> 
      </Container>

      <div className="d-flex flex-row pt-3 justify-content-center align-items-center">
        <PostCard />
      </div>
    </div>
  );
}

export default Home;

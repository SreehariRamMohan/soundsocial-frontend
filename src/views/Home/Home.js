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
      <div className="d-flex flex-row pt-3 justify-content-center align-items-center">
        <PostCard />
      </div>
    </div>
  );
}

export default Home;

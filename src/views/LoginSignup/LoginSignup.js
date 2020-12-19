import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom";
import { Card, Nav, Button, Form, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import {API_URL} from "Redux/constants"
import styles from './LoginSignup.module.css';
import { set_jwt_token, set_mongo_id, set_username } from "Redux/actions"
import Navbar from "components/CustomNavbar/CustomNavbar.js"

const axios = require("axios")

function LoginSignup() {

  const [loginState, toggleLoginState] = useState(true)

  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();
  const dispatch = useDispatch();

  function toggle() {
    toggleLoginState(!loginState);
  }

  function onSubmit() {
    let payload = {
      "username": usernameRef.current.value,
      "password": passwordRef.current.value
    }

    let route = "/signup"

    if (loginState) {
      route = "/login"
    }

    axios.post(API_URL + route, payload)
      .then(res => {
        if (res.status == 200) {
          const access_token = res.data["access_token"]
          const mongo_id = res.data["mongo_id"]

          dispatch(set_jwt_token(access_token))
          dispatch(set_mongo_id(mongo_id))
          dispatch(set_username(usernameRef.current.value))

          history.push("/home")
        }
      })
  }

  function renderForm(){
    return (
      <Card.Body>

        <center>
          <h3 className="display-4">

            { loginState 
              ? "Log In"
              : "Sign Up"
            }
          </h3>
        </center>

        <Form.Group controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            <h4>
              Username
            </h4>
          </Form.Label>
          <Col sm={7}>
            <Form.Control ref={usernameRef} type="text" placeholder="user32" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formHorizontalPassword">
          <Form.Label column sm={3}>
            <h4>
              Password
            </h4>
          </Form.Label>
          <Col sm={7}>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group>
          <Row className="justify-content-md-center mx-3" style={{width: "80%"}}>

            <Col>
              <Button onClick={() => onSubmit()} variant="primary">
                { loginState 
                  ? "Log In"
                  : "Sign Up"
                }
              </Button> 
            </Col>

            <Col>
              <div onClick={() => toggle()} className="my-2">
                { loginState 
                  ? "Sign Up"
                  : "Log In"
                }
              </div> 
            </Col>
          </Row>
        </Form.Group>
      </Card.Body>
    );
  }

  return (
    <React.Fragment>
      <Navbar />

      <div className={styles.background} >
        <div className={styles.card}>

          <Row>
            <Col>
              <h1 className="display-4">
                Download Pod-Clipper Extension
              </h1>
            </Col>
            <Col className="justify-content-center">{renderForm()}</Col>
          </Row>

        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(LoginSignup);


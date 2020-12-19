import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { Card, Nav, Button, Form, Row, Col } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {API_URL} from "../Redux/constants"
import styles from './LoginSignup.module.css';
import { set_jwt_token, set_mongo_id, set_username } from "../Redux/actions"

const axios = require("axios")

function LoginSignup() {

    const [loginState, toggleLoginState] = useState(true)

    const usernameRef = React.createRef();
    const passwordRef = React.createRef();
    const history = useHistory();
    const dispatch = useDispatch();

    function toggle(bool) {
        toggleLoginState(bool)
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

    return (
        <React.Fragment>
            <div
                className={styles.background}
            >
                <div className={styles.card}>
                    <Card.Header className={styles.cardHeader}>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item onClick={() => toggle(true)}>
                                <Nav.Link href="#first">Log In</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => toggle(false)}>
                                <Nav.Link href="#link">Create Account</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Username
    </Form.Label>
                            <Col sm={7}>
                                <Form.Control ref={usernameRef} type="text" placeholder="user32" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                                Password
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        {loginState ? <Button onClick={() => onSubmit()} variant="primary">Log in</Button> : <Button onClick={() => onSubmit()} variant="primary">Sign Up</Button>}
                    </Card.Body>
                </div>

            </div>

        </React.Fragment>
    )
}

export default withRouter(LoginSignup);


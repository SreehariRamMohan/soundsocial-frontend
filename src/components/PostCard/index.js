import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import styles from './PostCard.module.css';

import ExampleWave from 'assets/audiowave-example.png';
import AddButton from 'assets/addButton.svg';

function PostCard(props) {
  return (
    <Card className={styles.container}>
      <Card.Body className="p-5">
        <Container>
          <Row>
            <Col xs={5}>
              <Card.Subtitle className="mb-2">
                <div className="d-flex flex-row">
                  <span class="inline-block relative mx-3">
                    <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"></span>
                  </span>
                  <h2>
                    Username
                  </h2>
                </div>

              </Card.Subtitle>

              <br />

            </Col>

            <Col></Col>

            <Col xs={5} className="mx-2">
              <Card.Text>
                <h5>Thoughts</h5>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>

            </Col>

          </Row>

          <Row>
            <Col xs={5}>
              <Card.Img variant="top" src={ExampleWave} />
            </Col>

            <Col></Col>

            <Col xs={5} className="mx-2">
              <hr />

              <Card.Text>
                <h5>Transcripts</h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

              </Card.Text>

            </Col>

          </Row>

        </Container>

        <div className="addButton">
          <img src={AddButton} alt="" className={styles.addButton} />
        </div>

        <Card.Title className={styles.cardTitle}>
          <Link>
            <h1 className="display-3"> Card Title </h1>
          </Link>
        </Card.Title>


      </Card.Body>
    </Card>

  )
}

export default withRouter(PostCard);



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
                <h2>
                  Username
                </h2>
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



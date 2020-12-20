import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import styles from './ClipCard.module.css';

import ExampleWave from 'assets/audiowave-example.png';
import AddButton from 'assets/addButton.svg';

function ClipCard(props) {

  return (
    <Card className={styles.container}>
      <Card.Body className="p-5">
        <Card.Title>
          <Link to={props.source_url}>
            <h1 className="display-3">
              {props.title}
            </h1>
          </Link>
        </Card.Title>
        <Card.Img variant="top" src={props.wave_image} />
        <Card.Text>
          <h5>Transcript</h5>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

        </Card.Text>

      </Card.Body>
    </Card>

  )
}

export default withRouter(ClipCard);



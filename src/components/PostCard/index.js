import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './PostCard.module.css';

import ExampleWave from 'assets/audiowave-example.png';
import AddButton from 'assets/addButton.svg';

function PostCard(props) {

  function savePost(){
    // console.log("saving " + props.post_id);
  }

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
                    {props.username}
                  </h2>
                </div>

              </Card.Subtitle>

              <br />

            </Col>

            <Col></Col>

            <Col xs={5} className="mx-2">
              <Card.Text>
                <h5>Thoughts</h5>
                {props.caption}
              </Card.Text>

            </Col>

          </Row>

          <Row>
            <Col xs={5}>
              <Card.Img variant="top" src={props.wave_image} />
            </Col>

            <Col></Col>

            <Col xs={5} className="mx-2">
              <hr />

              <Card.Text>
                <h5>Transcripts</h5>
                {props.transcript}
              </Card.Text>

            </Col>

          </Row>

        </Container>

        {props.displayAddButton &&
          <div className={styles.addButtonWrapper} onClick={savePost}>
            <h1>+</h1>
          </div>
        }

        <Card.Title className={styles.cardTitle}>
          <Row className="align-items-md-center">
            <Link to={props.source_url}>
              <h1 className="display-3"> {props.post_title} </h1>
            </Link>

            <h2 className="display-5 ml-4 mt-4"> {props.clip_title} </h2>
          </Row>
        </Card.Title>

      </Card.Body>
    </Card>
  )
}

PostCard.propTypes = {
  post_title: PropTypes.string.isRequired, 
  source_url: PropTypes.string.isRequired,
  wave_image: PropTypes.string.isRequired,
  transcript: PropTypes.string.isRequired,
  clip_title: PropTypes.string.isRequired,

  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired, 
  timestamp: PropTypes.string.isRequired,

  displayAddButton: PropTypes.bool
};

PostCard.defaultProps = {
  post_title: "post_title",
  clip_title: "clip_title",
  username: "username",
  caption: "<caption> Some quick example text to build on the card title and make up the bulk of the card's content.",
  timestamp: "xxx-xxx-xxx", 
  source_url: "#",
  wave_image: ExampleWave,
  transcript: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", 
  displayAddButton: false
};

export default withRouter(PostCard);



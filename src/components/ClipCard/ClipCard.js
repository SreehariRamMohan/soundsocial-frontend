import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from './ClipCard.module.css';

import ExampleWave from 'assets/audiowave-example.png';
import AddButton from 'assets/addButton.svg';
import PropTypes from 'prop-types';

import { API_URL, _imageEncode } from "../../Redux/constants"

const axios = require("axios")

function ClipCard(props) {

  const [image, setImage] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/image/${props.wavefile_image}`,
      responseType: 'arraybuffer' 
    })
      .then((res) => {
        setImage(_imageEncode(res.data));
      })
  }, [])

  return (
    <Card className={styles.container}>
      <Card.Body className="p-5">
        <Card.Title>
          <Link to={props.source_url}>

            <a target="_blank" href={props.source_url}>
              <h1 className="display-3">
                {props.title}
              </h1>
            </a>

          </Link>
        </Card.Title>
        <Card.Img variant="top" src={image} />
        <Card.Text>
          <h5>Transcript</h5>
          {props.transcript}
        </Card.Text>

      </Card.Body>
    </Card>

  )
}

ClipCard.propTypes = {
  title: PropTypes.string.isRequired, 
  source_url: PropTypes.string.isRequired,
  wavefile_image: PropTypes.string.isRequired, 
  transcript: PropTypes.string.isRequired,
};

ClipCard.defaultProps = {
  title: "title",
  source_url: "#",
  wavefile_image: "#", 
  transcript: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", 
};

export default withRouter(ClipCard);



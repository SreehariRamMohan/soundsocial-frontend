import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import styles from './PostCard.module.css';

import ExampleWave from 'assets/audiowave-example.png';
import AddButton from 'assets/addButton.svg';

import { API_URL, _imageEncode } from "../../Redux/constants"

//axios
const axios = require("axios")

function PostCard(props) {

  const dispatch = useDispatch();
  const mongo_id = useSelector(state => state.mongo_id)
  const jwt_token = useSelector((state) => state.jwt_token);
  const [clipData, setClipData] = useState({});

  const [image, setImage] = useState("");
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/clip/${props.clip_id}`,
    })
      .then((res) => {
        setClipData(res.data.clip);
        console.log(props.clip_id);
        console.log(JSON.stringify(res.data.clip));

        axios({
          method: "get",
          url: `${API_URL}/image/${res.data.clip.gcs_wavefile_image}`,
          responseType: 'arraybuffer' 
        })
          .then((res) => {
            setImage(_imageEncode(res.data));
          });

        axios.get(`${API_URL}/audio/${res.data.clip.gcs_wavefile}`, {
          responseType: 'arraybuffer',
          headers: { 'Content-Type': 'audio/wav' }
        }).then((res) => {

          const blob = new Blob([res.data], {
            type: 'audio/wav'
          });

          const url = URL.createObjectURL(blob);
          setAudioSrc(url);
        });
      });
  }, []);

  function savePost(){
    console.log("saving " + props.post_id);

    axios({
      method: "post",
      url: `${API_URL}/savePost`,
      data: {
        "mongo_id": mongo_id,
        "post_id": props.post_id,
      },
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    })
      .then((res) => {
        console.log("post saved", res.data)
      })
  }


  return (
    <Card className={styles.container}>
      <Card.Body className="p-5">
        <Container>
          <Row>
            <Col xs={5}>
              <Card.Subtitle className="mb-2">
                <div className="d-flex flex-row">
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
              <Card.Img variant="top" src={image} /> 
              <div className="my-3">
                <audio src={audioSrc} controls />
              </div>
            </Col>

            <Col></Col>

            <Col xs={5} className="mx-2">
              <hr />

              <Card.Text>
                <h5>Transcripts</h5>
                { clipData.transcript }
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
            <a target="_blank" href={clipData.source_url}>
              <h3 className="display-5"> {props.post_title} </h3>
            </a>

            <h4 className="display-6 ml-4 mt-5"> { clipData.title } </h4>
          </Row>
        </Card.Title>

      </Card.Body>
    </Card>
  )
}

PostCard.propTypes = {
  post_title: PropTypes.string.isRequired, 
  // source_url: PropTypes.string.isRequired,
  // wave_image: PropTypes.string.isRequired,
  // transcript: PropTypes.string.isRequired,
  // clip_title: PropTypes.string.isRequired,

  post_id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired, 
  timestamp: PropTypes.string.isRequired,
  clip_id: PropTypes.string.isRequired,

  displayAddButton: PropTypes.bool
};

PostCard.defaultProps = {
  post_title: "post_title",
  // clip_title: "clip_title",
  // source_url: "#",
  // wave_image: ExampleWave,
  // transcript: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", 
  username: "username",
  caption: "<caption> Some quick example text to build on the card title and make up the bulk of the card's content.",
  timestamp: "xxx-xxx-xxx", 
  displayAddButton: false
};

export default withRouter(PostCard);



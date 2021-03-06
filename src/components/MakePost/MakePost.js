import React, { useState, useEffect } from "react";
import Navbar from "components/CustomNavbar/CustomNavbar.js"

import { TextField, Select, Button } from "@material-ui/core"

import { useSelector } from "react-redux"
import { API_URL } from "../../Redux/constants"

const axios = require("axios")

function MakePost(props) {

  const [postTitle, setPostTitle] = useState("")
  const [clipIndexChosen, setClipIndexChosen] = useState(0)
  const [thoughts, setThoughts] = useState("")

  const [clips, setClips] = useState([])
  const [clipIds, setClipIds] = useState([])

  const mongo_id = useSelector(state => state.mongo_id)
  const jwt_token = useSelector((state) => state.jwt_token);

  function post() {
    console.log(postTitle, clipIndexChosen, thoughts)
    axios({
      method: "post",
      url: `${API_URL}/createPost`,
      data: {
        "mongo_id": mongo_id,
        "title": postTitle,
        "caption": thoughts,
        "clip_id": clipIds[clipIndexChosen]
      },
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    })
      .then((res) => {
        console.log("message posted", res.data)
        props.refresh()
      })
  }

  useEffect(() => {
    const payload = {
      "mongo_id": mongo_id
    }
    axios.post(API_URL + "/getClips", payload)
      .then(res => {
        setClips(res.data["clip_names"])
        setClipIds(res.data["clip_ids"])
      })
  }, [])

  return (
    <form noValidate autoComplete="off">
      <p>Make Post</p>

      <TextField className="mt-3" fullWidth id="standard-basic" label="Post Title" value={postTitle} onChange={(e) => { setPostTitle(e.target.value) }} />
      <Select className="mt-3" fullWidth id="standard-basic" label="Select Clip from Library" value={clipIndexChosen} onClick={(e) => { setClipIndexChosen(e.target.value) }}>
        {clips.map((value, index, arr) => {
          return <option value={index}>{value}</option>
        })
        }
      </Select>
      <TextField className="mt-3" multiline fullWidth id="standard-basic" label="Thoughts" value={thoughts} onChange={(e) => { setThoughts(e.target.value) }} />
      <Button className="mt-3" variant="outlined" color="primary" onClick={post}>
        Post
        </Button>
    </form>
  )
}

export default MakePost

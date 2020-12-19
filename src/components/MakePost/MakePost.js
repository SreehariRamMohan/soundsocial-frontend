import React, { useState, useEffect } from "react";
import Navbar from "components/CustomNavbar/CustomNavbar.js"

import { TextField, Select, Button } from "@material-ui/core"

import { useSelector } from "react-redux"
import { API_URL } from "../../Redux/constants"

const axios = require("axios")

function MakePost() {

    const [postTitle, setPostTitle] = useState("")
    const [clip, setClip] = useState("")
    const [thoughts, setThoughts] = useState("")

    const [clips, setClips] = useState([])

    const mongo_id = useSelector(state => state.mongo_id)
    const jwt_token = useSelector((state) => state.jwt_token);

    function post() {
        console.log(postTitle, clip, thoughts)

        //axios post to backend
    }

    useEffect(() => {
        const payload = {
            "mongo_id": mongo_id
        }
        axios.post(API_URL + "/getClips", payload)
            .then(res => {
                setClips(res.data["clip_names"])
            })
    }, [])

    return (
      <form noValidate autoComplete="off">
        <p>Make Post</p>

        <TextField className="mt-3" fullWidth id="standard-basic" label="Post Title" value={post} onClick={(e) => { setPostTitle(e.target.value) }} />
        <Select className="mt-3" fullWidth id="standard-basic" label="Select Clip from Library" value={clip} onClick={(e) => { setClip(e.target.value) }}>
          {clips.map((value, index, arr) => {
            return <option>{value}</option>
          })
          }
        </Select>
        <TextField className="mt-3" multiline fullWidth id="standard-basic" label="Thoughts" value={thoughts} onClick={(e) => { setThoughts(e.target.value) }} />
        <Button className="mt-3" variant="outlined" color="primary">
          Post
        </Button>
      </form>
    )
}

export default MakePost

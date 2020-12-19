import React, { useState, useEffect } from "react";
import Navbar from "components/CustomNavbar/CustomNavbar.js"

import { TextField, Select, Button } from "@material-ui/core"
import {useSelector} from "react-redux"
import {API_URL} from "../../Redux/constants"

const axios = require("axios")

function MakePost() {

    const [postTitle, setPostTitle] = useState("")
    const [clip, setClip] = useState("")
    const [thoughts, setThoughts] = useState("")

    const [clips, setClips] = useState([])
    
    const mongo_id = useSelector(state => state.mongo_id)

    function post() {
        console.log(postTitle, clip, thoughts)

        //axios post to backend
    }

    useEffect(() => {
        const payload = {
            "mongo_id": mongo_id
        }
        axios.get(API_URL + "/clip", payload)
            .then(res => {
                console.log(res.data)
                setClips(res.data.clip_names)
            })
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div className="container d-flex flex-direction-row justify-content-center mt-5" >
                <div className="d-flex flex-row">
                    <form noValidate autoComplete="off">
                        <p>Make Post</p>

                        <TextField className="mt-3" fullWidth id="standard-basic" label="Post Title" value={post} onClick={(e) => { setPostTitle(e.target.value) }} />
                        <Select className="mt-3" fullWidth id="standard-basic" label="Select Clip from Library" value={clip} onClick={(e) => { setClip(e.target.value) }}>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <TextField className="mt-3" multiline fullWidth id="standard-basic" label="Thoughts" value={thoughts} onClick={(e) => { setThoughts(e.target.value) }} />
                        <Button className="mt-3" variant="outlined" color="primary">
                            Post
                        </Button>
                    </form>
                </div>


            </div>
        </React.Fragment>
    )
}

export default MakePost

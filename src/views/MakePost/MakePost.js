import React from 'react'
import Navbar from "components/CustomNavbar/CustomNavbar.js"

import { TextField, Button } from "@material-ui/core"

function MakePost() {

    const [postTitle, setPostTitle] = useState("")
    const [clip, setClip] = useState("")
    const [thoughts, setThoughts] = useState("")


    function post() {
        console.log(postTitle, clip, thoughts)

        //axios post to backend
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="container d-flex flex-direction-row justify-content-center mt-5" >
                <div className="d-flex flex-row">
                    <form noValidate autoComplete="off">
                        <p>Make Post</p>

                        <TextField className="mt-3" fullWidth id="standard-basic" label="Post Title" value={post} onClick={(e) => {setPostTitle(e.target.value)}}/>
                        <TextField className="mt-3" fullWidth id="standard-basic" label="Select Clip from Library" value={clip} onClick={(e) => {setClip(e.target.value)}} />
                        <TextField className="mt-3" multiline fullWidth id="standard-basic" label="Thoughts" value={thoughts} onClick={(e) => {setThoughts(e.target.value)}} />
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

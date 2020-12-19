import React from 'react'
import Navbar from "../CustomNavbar/CustomNavbar.js"
import { TextField, Button } from "@material-ui/core"

function MakePost() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container d-flex flex-direction-row justify-content-center mt-5" >
                <div className="d-flex flex-row">
                    <form noValidate autoComplete="off">
                        <p>Make Post</p>

                        <TextField className="mt-3" fullWidth id="standard-basic" label="Post Title" />
                        <TextField className="mt-3" fullWidth id="standard-basic" label="Select Clip from Library" />
                        <TextField className="mt-3" multiline fullWidth id="standard-basic" label="Thoughts" />
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

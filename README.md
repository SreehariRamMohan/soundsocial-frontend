Soundsocial // HackUMass VIII

Our project is split among the following repositories:
1. Front end (this repository)
2. Back end (https://github.com/kaisucode/soundsocial-backend)
3. Linux Quick Capture Client (https://github.com/kaisucode/soundsocial-desktop-linux)

### What it is
Soundsocial is a personal knowledge management & audio-based social media tool to help users find, curate, and share all forms of spoken text audio such as Podcasts, YouTube videos, or Online Tutorials.

### Login
![Alt text](src/assets/readme/login.png?raw=true "Login")

### What it does
There are two ways to use our project: find and curate a personal knowledge library of spoken text (with our in-built transcription) and/or share your thoughts on podcasts, YouTube videos, and tutorials publicly with the world. 

### Public Feed
![Alt text](src/assets/readme/Feed-gif.gif?raw=true "Soundsocial post feed")

### User Content Library
![Alt text](src/assets/readme/library.gif?raw=true "Soundsocial user content library")

### Linux Quick Audio Capture Tool
![Alt text](src/assets/readme/linux-tool.gif?raw=true "Soundsocial quick audio capture tool")


### How we built it
We built our front end portal and social sharing platform in React, HTML/CSS/Javascript. We used Redux for state management as well as UI design libraries such as Material UI, TailwindCSS, and React Bootstrap. 

Our backend was written in Python and Flask. We used a MongoDB database for storing user information such as usernames/hashed passwords, posts, and audio clip meta-data. We stored the waveform (audio) files as well as the generated waveform graphic on Google Cloud Storage.

We created a small linux utility extension to record system-level audio using GTK, Python, and FFMPEG. This extension is useful for grabbing audio clips and sending them to our Flask backend where they are transcribed (using a pre-built speech-text ML model), and stored (in google cloud) along with a generated image of the waveform plot. 

### How we deployed it

We deployed our front end portal with Netlify and hosted our website using a domain from Domain [dot] com. 

We deployed our backend Flask server on a Google Cloud Instance, and used a Google Storage bucket to store user submitted audio clips. We used MongoDB Cloud Atlas for our database. 

### Building from source
The project is no longer hosted on google cloud. To build from source follow the instructions below. 


Front End
1. ```npm install``` in root directory to install node modules
2. ```npm start``` to start localhost on port 3000

Back End
1. Clone this repository. 
2. Create a python virtual environment ```python3 -m venv ./venv```
3. Activate the environment ```source activate venv``` and pip install the requirements.txt file ```pip install -r requirements.txt```
4. create a folder called WavefileUploads ```mkdir WavefileUploads``` in root
5. Create a local mongodb database called ```goodpods```. Modify line 45 of app.py in backend to connect to your database. 
6. run the server ```python app.py```

Linux Quick Capture Utility (Ubuntu Instructions)
1. Install PyGObject on your system with `sudo apt-get install python3-gi`
2. Configure `pavucontrol` for system audio recording by following the instructions on [this link](https://askubuntu.com/a/682793)
3. `pip install -r requirements` to install the dependencies
4. Run `python app.py` to start the script. A icon should appear on your status bar, allowing you to start and stop recording audio, as well as quit the application.

### Created By
- Sreehari Rammohan
- Kevin Hsu
- Michael Donoso

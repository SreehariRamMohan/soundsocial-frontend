import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
import Home from "views/Home/Home"
import UserLibrary from "views/UserLibrary/"
import LoginSignup from "views/LoginSignup/LoginSignup"
import AuthComponent from "components/AuthComponent/AuthComponent"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AuthComponent(Home)} />
        <Route path="/home" exact component={AuthComponent(UserLibrary)} />
        <Route path="/logout" exact component={LoginSignup} />
        <Route path="/library" exact component={AuthComponent(UserLibrary)} />
      </Switch>
    </Router>
  );
}

export default App;

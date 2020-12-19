import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
import Home from "./Home/Home"
import LoginSignup from "./LoginSignup/LoginSignup"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/logout" exact component={LoginSignup} />
      </Switch>
    </Router>
  );
}

export default App;

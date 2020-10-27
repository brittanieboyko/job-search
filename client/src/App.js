import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import NoMatch from "./Pages/NoMatch/NoMatch";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
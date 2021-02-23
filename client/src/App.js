import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Profile from "./Pages/Profile/Profile";
import Calendar from "./Pages/Calendar/Calendar";
import NavBar from "./Components/NavBar/NavBar";
import { Heading } from "evergreen-ui";

const App = () => {
  return (
    <Router>
      <Heading size={900}>Job Buddy</Heading>
      <NavBar />
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

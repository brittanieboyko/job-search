import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Goals from "./Pages/Goals/Goals";
import MyCalendar from "./Pages/Calendar/Calendar";
import Container from "react-bootstrap/Container";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Container display="flex">
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/goals">
              <Goals />
            </Route>
            <Route exact path="/calendar">
              <MyCalendar />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Container>
  );
};

export default App;

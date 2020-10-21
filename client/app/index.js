import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
// import Details from "./Components/Pages/Details/Details";
// import NoMatch from "./Components/Pages/NoMatch/NoMatch";

function App() {
  return (
    <Home />
    // <Router>
    //     <Switch>
    //       <Route path="/details">
    //         <Details />
    //       </Route>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    // </Router>
  );
}

export default App;

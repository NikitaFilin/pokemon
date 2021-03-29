import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
// import { Error } from "./components/Error";
// import { PokemonDetails } from "./components/PokemonDetails";

function App() {
  return (
    // <Router>
    //   <div>
    //     <Link to="/home">Home</Link>
    //     <Link to="/details">Details</Link>
    //   </div>
    //   <Switch>
    //     <Route exact path="/home" component={Home} />
    //     <Route exact path="/details" component={PokemonDetails} />
    //     <Route exact component={Error} />
    //   </Switch>
    // </Router>
    <Home />
  );
}
// render={(props) => <PropsPage {...props} title={`Props through render`}
export default App;

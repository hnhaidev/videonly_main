import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AnimationsProvider from "./contexts/AnimationsProvider";

const App = () => {
  return (
    <Router>
      <AnimationsProvider>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </AnimationsProvider>
    </Router>
  );
};

export default App;

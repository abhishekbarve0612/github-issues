import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Issues from "./components/Issues";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/github-issues/">GIT HUB Issues</Link>
        </header>
        <Switch>
          <Route exact path="/github-issues/:page?">
            <Issues />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

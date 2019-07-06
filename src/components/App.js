import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";
import Recommend from "./recommend/Recommend";
import Ranking from "./ranking/Ranking";
import NewReleases from "./new-releases/NewReleases";
import Search from "./search/Search";
import "../assets/scss/App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="tab-nav">
          <div className="tab-item">
            <NavLink to="/recommend" className="nav-link">
              <span>Made For You</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/ranking" className="nav-link">
              <span>Ranking</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/new-releases" className="nav-link">
              <span>New Releases</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/search" className="nav-link">
              <span>Search</span>
            </NavLink>
          </div>
        </div>
        <div className="music-panel">
          <header className="app-header">
            <h1>React Music App</h1>
          </header>
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/new-releases" component={NewReleases} />
            <Route path="/search" component={Search} />
            <Route component={Recommend} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

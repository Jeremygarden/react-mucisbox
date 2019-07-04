import React from "react";
import "../assets/scss/App.scss";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Music App</h1>
      </header>
      <div className="tab-nav">
        <div className="tab-item selected">
          <span>Made For You</span>
        </div>
        <div className="tab-item">
          <span>Ranking</span>
        </div>
        <div className="tab-item">
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}

export default App;

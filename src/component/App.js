import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import Prizes from "./Prizes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>🍀🆂🆄🅿🅿🅾🆁🆃🅴🆁 🅲🅾🅽🆃🅴🆂🆃</h3>
          <a
            className="App-link"
            href="https://instagram.com/forfortsakes"
            target="_blank"
            rel="noopener noreferrer"
          >
            @forfortsakes
          </a>
        </header>
        <Leaderboard />
        <Prizes />
      </div>
    );
  }
}

export default App;

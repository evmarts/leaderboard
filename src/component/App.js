import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import Prizes from "./Prizes";
import Countdown from "./Countdown";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a
          className="App-link"
          href="https://instagram.com/forfortsakes"
          target="_blank"
          rel="noopener noreferrer"
        >
          @forfortsakes
        </a>
        <header className="App-header" style={{ backgroundColor: "#70c1ec" }}>
          <h1>🍀🅂🅄🄿🄿🄾🅁🅃🄴🅁 🄲🄾🄽🅃🄴🅂🅃</h1>
        </header>
        <Countdown />
        <Leaderboard />
        <Prizes />
      </div>
    );
  }
}

export default App;

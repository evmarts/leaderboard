import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import Prizes from "./Prizes";
import Countdown from "./Countdown";
import FooterPage from "./FooterPage";
import Rules from "./Rules";
import "./App.css";
import UserSearch from "./UserSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundColor: "#193c4d" }}>
          <h1>🍀𝙎𝙪𝙥𝙥𝙤𝙧𝙩𝙚𝙧 𝙂𝙞𝙫𝙚𝙖𝙬𝙖𝙮 𝙇𝙚𝙖𝙙𝙚𝙧𝙗𝙤𝙖𝙧𝙙</h1>
        </header>
        <Leaderboard />
        <Countdown />
        <Rules />
        <UserSearch />
        <Prizes />
        <FooterPage />
      </div>
    );
  }
}

export default App;

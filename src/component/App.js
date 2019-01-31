import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import Prizes from "./Prizes";
import Countdown from "./Countdown";
import FooterPage from "./FooterPage";
import "./App.css";

class App extends Component {
  Rules = () => {
    return (
      <div>
        <h2>🎯 𝙃𝙤𝙬 𝙩𝙤 𝙂𝙚𝙩 𝙋𝙤𝙞𝙣𝙩𝙨</h2>
        <div align="left" style={{ marginLeft: "25%", marginRight: "25%" }}>
          <ul>
            <p>𝟭𝟬𝟬𝗽𝘁𝘀: Like a post</p>
            <p>𝟮𝟬𝟬𝗽𝘁𝘀: Tag a friend (the friend needs to be following you)</p>
            <p>𝟯𝟬𝟬𝗽𝘁𝘀: Be one of the first 10 commenters on a post</p>
            <p>𝟱𝟬𝟬𝗽𝘁𝘀: Add Creator Code: 𝙁𝙊𝙍𝙁𝙊𝙍𝙏𝙎𝘼𝙆𝙀𝙎 (DM me a screenshot of my code as your Support A Creator code)</p>
            <br />
            <p>
              At the end of the contest, a winner will be randomly chosen from
              top 30 supporters. Users with more points will have a higher
              chance of winning.
            </p>
          </ul>
        </div>
      </div>
    );
  };

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
        <header className="App-header" style={{ backgroundColor: "#193c4d" }}>
          <h1>🍀𝙎𝙪𝙥𝙥𝙤𝙧𝙩𝙚𝙧 𝙂𝙞𝙫𝙚𝙖𝙬𝙖𝙮 𝙇𝙚𝙖𝙙𝙚𝙧𝙗𝙤𝙖𝙧𝙙</h1>
        </header>
        <Leaderboard />
        <Countdown />
        <this.Rules />
        <Prizes />
        <FooterPage />
      </div>
    );
  }
}

export default App;

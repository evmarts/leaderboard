import React from "react";
import Countdown from "react-countdown-now";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <h2>⏰ 𝘾𝙤𝙣𝙩𝙚𝙨𝙩 𝙀𝙣𝙙𝙨 𝙄𝙣 </h2>
        <div style={{ fontSize: 70 }}>
          <Countdown date={"Sat, 23 Feb 2019 23:59:59"} />
        </div>
        <p>Contest begins: Mon, 18 Feb 2019</p>
      </div>
    );
  }
}

import React from "react";
import Countdown from "react-countdown-now";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Contest ends in: </h2>
        <div style={{ fontSize: 70 }}>
          <Countdown
            date={"Sat, 19 Jan 2019 23:59:59"}
          />
        </div>
      </div>
    );
  }
}

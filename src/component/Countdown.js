import React from "react";
import Countdown from "react-countdown-now";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <label style={{ fontWeight: "bold" }}>Contest ends in: </label>
        <Countdown date={"Sat, 19 Jan 2019 23:59:59"} />
      </div>
    );
  }
}

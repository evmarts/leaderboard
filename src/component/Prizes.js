import React from "react";

export default class Prizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ marginLeft: "40px", marginRight: "40px" }}>
        <h3> 🎁 𝙂𝙞𝙫𝙚𝙖𝙬𝙖𝙮 𝙋𝙧𝙞𝙯𝙚𝙨</h3>
        <p>
          At the end of the contest, the user with the most points on the
          leaderboard wins the giveaway...
        </p>
        <div>
          The winner of the contest will be mailed a $10 giftcard on the console
          of their choice.
        </div>
        <p>Last Winner: @whoops.alexs</p>
        <br />
      </div>
    );
  }
}

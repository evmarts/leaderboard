import React from "react";
import "../Leaderboard.css";
import Countdown from "./Countdown";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  render() {
    let response = [
      { username: "evan", points: 2, position: 6 },
      { username: "alison", points: 3, position: 5 },
      { username: "doug", points: 4, position: 4 },
      { username: "cindy", points: 5, position: 3 },
      { username: "riley", points: 6, position: 2 },
      { username: "elli", points: 7, position: 1 }
    ];
    return (
      <div align="center">
        <h2>Leaderboard</h2>
        <table>
          <tbody>
            {response.map((item, key) => {
              return (
                <tr key={key}>
                  <td style={{ fontWeight: "bold" }}>{item.position}</td>
                  <td>{item.points}</td>
                  <td>{item.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br></br>
        <Countdown />
      </div>
    );
  }
}

import React from "react";
import axios from "axios";
import Countdown from "./Countdown";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "http://secure-anchorage-54009.herokuapp.com/api/leaderboard"
    );
    await this.setState({ response: response });
  }

  render() {
    console.log(this.state.response);
    return this.state.response ? (
      <div align="center">
        <h2>Leaderboard</h2>
        <table>
          <tbody>
            {this.state.response.data.map((item, key) => {
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
        <br />
        <Countdown />
      </div>
    ) : (
      <div />
    );
  }
}
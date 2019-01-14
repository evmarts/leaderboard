import React from "react";
import axios from "axios";
import Table from "./Table";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

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

  Rules = () => {
    return (
      <div>
        <h4>Rules</h4>
        <div align="left">
          <li>1️⃣ Like for +1 point</li>
          <li>2️⃣ Each friend you comment is +2 points</li>
          <li>
            1️⃣0️⃣ Add creator code "FORFORTSAKES" as your Support A Creator
          </li>
          <p>💰 Winner gets a $20 gift card!</p>
          <p>🤜🤛 On the event of a tie, the winner is randomly chosen</p>
        </div>
      </div>
    );
  };

  render() {
    return this.state.response ? (
      <div>
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
          <this.Rules />
        </div>
        <div style={{ marginLeft: "10%", marginRight: "10%" }} align="center">
          <Table data={this.state.response.data} />
          <br />
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

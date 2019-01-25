import React from "react";
import axios from "axios";
import Table from "./Table";
import ReactLoading from "react-loading";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
      rules: false
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
        <h2>Rules ✅</h2>
        <div align="left">
          <li>1️⃣ Like for +1 point</li>
          <li>2️⃣ Each friend you comment is +2 points</li>
          <li>3️⃣ First 10 comments gets +3 points</li>
          <li>🔟 Add me as your Support a Creator for +10 points</li>
          <br />
          <p>💰 Winner gets a $20 gift card!</p>
          <p>🤜🤛 On the event of a tie, the winner is randomly chosen</p>
        </div>
      </div>
    );
  };

  render() {
    return this.state.response ? (
      <div>
        {this.state.rules ? (
          <div>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              <this.Rules />
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              this.setState({ rules: true });
            }}
          >
            show rules
          </button>
        )}
        <div style={{ marginLeft: "10%", marginRight: "10%" }} align="center">
          <Table data={this.state.response.data} />
          <br />
        </div>
      </div>
    ) : (
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <this.Rules />
        <div align="center">
          <ReactLoading
            type={"spin"}
            color={"#70c1ec"}
            height={50}
            width={50}
          />
        </div>
      </div>
    );
  }
}

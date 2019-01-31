import React from "react";
import axios from "axios";
import Table from "./Table";
import ReactLoading from "react-loading";
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

  render() {
    return this.state.response ? (
      <div>
        <div style={{ marginLeft: "10%", marginRight: "10%" }} align="center">
          <Table data={this.state.response.data} pageSize={10} />
          <br />
        </div>
      </div>
    ) : (
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
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

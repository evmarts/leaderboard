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

  render() {
    return this.state.response ? (
      <div style={{ marginLeft: "10%", marginRight: "10%" }} align="center">
        <Table data={this.state.response.data} />
        <br />
      </div>
    ) : (
      <div />
    );
  }
}

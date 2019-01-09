import React from "react";
import axios from "axios";
import Countdown from "./Countdown";
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
    console.log(this.state.response);
    return this.state.response ? (
      <div align="center">
        <Table data={this.state.response.data} />
        <br />
        <Countdown />
      </div>
    ) : (
      <div />
    );
  }
}

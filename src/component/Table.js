import React, { Component } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Username",
    selector: "username"
  },
  {
    name: "Points",
    selector: "points",
    sortable: true
  },
  {
    name: "Support A Creator",
    selector: "support_a_creator",
    sortable: true
  },
  {
    name: "Likes",
    selector: "likes",
    sortable: true
  },
  {
    name: "Users Tagged",
    selector: "users_tagged",
    sortable: true
  },
];

class Table extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard 📶</h1>
        <DataTable columns={columns} data={this.props.data} />
      </div>
    );
  }
}

export default Table;

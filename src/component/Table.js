import React, { Component } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Username",
    selector: "username"
  },
  {
    name: "Total Points",
    selector: "points",
    sortable: true
  },
  {
    name: "Support Points",
    selector: "is_supporter",
    sortable: true
  },
  {
    name: "Likes Points",
    selector: "likes",
    sortable: true
  },
  {
    name: "Tag Points",
    selector: "users_tagged",
    sortable: true
  }
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

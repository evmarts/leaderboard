import React, { Component } from "react";
import DataTable from "react-data-table-component";

// const data = [{ title: 'Conan the Barbarian', year: '1982' }];
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
    name: "Likes",
    selector: "likes",
    sortable: true
  },
  {
    name: "Users Tagged",
    selector: "users_tagged",
    sortable: true
  }
];

class Table extends Component {
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <DataTable columns={columns} data={this.props.data} />
      </div>
    );
  }
}

export default Table;

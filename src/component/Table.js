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
    name: "Support",
    selector: "is_supporter",
    sortable: true
  },
  {
    name: "Likes",
    selector: "likes",
    sortable: true
  },
  {
    name: "Tags",
    selector: "users_tagged",
    sortable: true
  },
  {
    name: "Early Comments",
    selector: "early_comments",
    sortable: true
  },
  { name: "Chance to Win (in %)", selector: "chance", sortable: true }
];

class Table extends Component {
  render() {
    return (
      <div>
        <DataTable columns={columns} data={this.props.data} pagination={true} />
      </div>
    );
  }
}

export default Table;

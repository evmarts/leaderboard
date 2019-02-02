import React, { Component } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Username",
    selector: "username",
    width: "200px"
  },
  {
    name: "Total Points",
    selector: "points",
    sortable: true
  },
  {
    name: "Support",
    selector: "is_supporter",
    sortable: true,
    width: "75px"
  },
  {
    name: "Likes",
    selector: "likes",
    sortable: true,
    width: "75px"
  },
  {
    name: "Tags",
    selector: "users_tagged",
    sortable: true,
    width: "75px"
  },
  {
    name: "Early Comments",
    selector: "early_comments",
    sortable: true,
    width: "110px"
  }
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

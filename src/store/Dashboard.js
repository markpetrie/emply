
import React from "react";
import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }
  render() {
    const { categories } = this.props;
    const { expenses } = this.props;
    return (
      <div>
        <ReactTable
          data={categories}
          columns={[{
      Header: 'Budget Categories',
      columns: [{
        Header: 'Category',
        accessor: 'name'
      }, {
        Header: 'Budget',
        accessor: 'amount'
      }, {
        Header: 'Budget Remaining',
        accessor: 'amount',
        Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#dadada',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 66 ? '#85cc00'
                  : row.value > 33 ? '#ffbf00'
                  : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            />
          </div>
        )
      }, {
        Header: 'More',
        accessor: 'expense_link',
        }]
    }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />

      </div>
    );
  }
}

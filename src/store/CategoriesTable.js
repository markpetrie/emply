import React from "react";
import { render } from "react-dom";

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

        return (
            <div>
                <h1>Budget Categories</h1>
                <ReactTable
                    data={categories}
                    columns={[{
                        Header: '',
                        columns: [{
                            Header: 'Category',
                            accessor: 'name'
                        }, {
                            Header: 'Budget',
                            accessor: 'amount'
                        }, {
                            Header: 'Department',
                            accessor: 'department'
                        }, {
                            Header: 'More',
                            accessor: 'expense_link',
                        }]
                    }]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}
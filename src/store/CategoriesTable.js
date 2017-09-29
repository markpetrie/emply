import React from "react";
import { render } from "react-dom";


// Import React Table
import ReactTable from "react-table";
import { getTdProps } from "react-table";
import "react-table/react-table.css";

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: false,
            data: []
        };
        this.renderEditable = this.renderEditable.bind(this);
    }

    renderEditable(cellInfo) {

        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
            />
        );
    }

    render() {
        const { categories } = this.props;
        const { onUpdate } = this.props;
        return (
            <div>
                <h1>Budget Categories</h1>
                <ReactTable
                    data={categories}

                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onBlur: (e) => {
                                const { category } = rowInfo.row;
                                onUpdate({
                                    name: rowInfo.row.name,
                                    amount: rowInfo.row.amount,
                                    department: rowInfo.row.department,
                                    _id: rowInfo.row._id
                                });

                                console.log({
                                    name: rowInfo.row.name,
                                    amount: rowInfo.row.amount,
                                    department: rowInfo.row.department,
                                    _id: rowInfo.row._id
                                });
                            }
                        }
                    }
                    }

                    columns={[{
                        Header: '',
                        columns: [{
                            Header: 'Category',
                            accessor: 'name',
                            Cell: this.renderEditable
                        },
                        {
                            Header: 'Budget',
                            accessor: 'amount',
                            Cell: this.renderEditable
                        },
                        {
                            Header: 'Department',
                            accessor: 'department',
                            Cell: this.renderEditable
                        }, {
                            Header: 'ID',
                            accessor: '_id',
                        }]
                    }]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}

import React from "react";
import { render } from "react-dom";
import matchSorter from 'match-sorter';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


export default class ExpensesTable extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        };
    }
    render() {
        const { expenses } = this.props;
        const { categories } = this.props;
        const renderCategoryOptions = (category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
        )

        return (
            <div>
                <h1>Expenses</h1>
                <ReactTable
                    data={expenses}
                    categories={categories}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={[
                        {
                            Header: '',
                            columns: [{
                                Header: "Expense Item",
                                accessor: 'name',
                                filterMethod: (filter, row) =>
                                    row[filter.id].startsWith(filter.value) &&
                                    row[filter.id].endsWith(filter.value)
                            }, {
                                Header: 'Amount',
                                id: 'amount',
                                accessor: 'amount',
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["amount"] }),
                                filterAll: true
                            }, {
                                Header: 'Date',
                                accessor: 'Date',
                                id: 'date'
                            }, {
                                Header: 'Category',
                                accessor: d => d.category,
                                id: "category",
                                filterMethod: (filter, row) => {
                                    return row[filter.id];
                                },
                                Filter: ({ filter, onChange }) =>
                                    <select
                                        {...categories}
                                        onChange={event => onChange(event.target.value)}
                                        style={{ width: '100%' }}
                                        value={filter ? filter.value : 'all'}
                                    >
                                        <option value="all">Show All</option>
                                        {categories.map(renderCategoryOptions)}
                                    </select>
                            }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}  
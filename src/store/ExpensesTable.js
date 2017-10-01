import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ExpensesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            data: []
        };
        this.renderEditable = this.renderEditable.bind(this);
    }

    renderEditable(cellInfo) {
        const data = this.props.expenses;
        const { onUpdate } = this.props;
        return (
            <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
                data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                onUpdate(data[cellInfo.index]);            
        }}

        dangerouslySetInnerHTML={{
          __html: data[cellInfo.index][cellInfo.column.id]
        }}
        />
        );
    }

    render() {
        const { expenses } = this.props;
        const { categories } = this.props;

        return (
            <div>
                <h1>Expenses</h1>
                <ReactTable
                    data={expenses}
                    categories={categories}
                    columns={[
                        {
                            Header: '',
                            columns: [{
                                Header: "Item",
                                accessor: 'name',
                                Cell: this.renderEditable
                            }, 
                            {
                                Header: 'Amount',
                                accessor: 'amount',
                                Cell: this.renderEditable
                            }, 
                            {
                                Header: 'Date',
                                accessor: 'date',
                                Cell: this.renderEditable
                            }, 
                            {
                                Header: 'Category',
                                accessor: d => d.category,
                                id: "category",
                            }]
                        }]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}  
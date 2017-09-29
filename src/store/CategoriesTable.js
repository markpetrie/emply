import React from "react";
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
        const data = this.props.categories;
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
        const { categories } = this.props;
        const renderCategoryOptions = (category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
        )
        return (
            <div>
                <h1>Expense Categories</h1>
                <ReactTable
                    data={categories}
                    columns={[
                        {
                        Header: '',
                        columns: [{
                            Header: 'Expense Category',
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
                        }, 
                        {
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


import React from 'react';
import AddExpense from './AddExpense';
import ExpensesTable from './ExpensesTable';

export default function Expenses(props) {

    if (props.loading) return <div>Loading...</div>;

    return (
        <div>
            <div>
                {props.error && <pre>{props.error.toString()}</pre>}
                <div style={{ display: 'flex 3', flexFlow: 'row' }}>
                    <ExpensesTable expenses={props.expenses} onUpdate={props.updateExpense} />
                </div>
                <div>
                    <div style={{ display: 'flex 1', flexFlow: 'row' }} />
                    <AddExpense onAdd={props.addExpense} categories={props.categories}/>

                </div>
            </div>
            <br />
        </div>
    )
}

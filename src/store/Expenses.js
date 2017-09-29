
import React from 'react';
import AddExpense from './AddExpense';
import ExpensesTable from './ExpensesTable';

export default function Expenses({ expenses, loading, error, addExpense, updateExpense, categories }) {
    

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div>
                {error && <pre>{error.toString()}</pre>}
                <div style={{ display: 'flex 3', flexFlow: 'row' }}>
                    <ExpensesTable expenses={expenses} onUpdate={updateExpense} />
                </div>
                <div>
                    <div style={{ display: 'flex 1', flexFlow: 'row' }} />
                    <AddExpense onAdd={addExpense} categories={categories}/>
                </div>
            </div>
            <br />
        </div>
    )
}

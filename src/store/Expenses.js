
import React from 'react';
import AddExpense from './AddExpense';
import ExpensesTable from './ExpensesTable';

const err = err => <pre>{err}</pre>;

export default function Expenses({ categories, expenses, loading, error, addExpense }) {

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {error && (Array.isArray(error) ? error.map(err) : err(error))}
            <div style={{display: 'flex 1', flexFlow: 'row'}}>
            <ExpensesTable expenses={expenses} categories={categories}/>
            <br/>
            <AddExpense onAdd={addExpense} categories={categories}/>
            </div>
        </div>
    );
}
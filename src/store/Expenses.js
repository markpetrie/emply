
import React from 'react';
import AddExpense from './AddExpense';

const err = err => <pre>{err}</pre>;

export default function Expenses({ categories, expenses, loading, error, addExpense }) {

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {error && (Array.isArray(error) ? error.map(err) : err(error))}
            <AddExpense onAdd={addExpense} categories={categories} expenses={expenses}/>
        </div>
    );
}
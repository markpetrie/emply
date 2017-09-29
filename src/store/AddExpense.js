
import React from 'react';

export default function addExpense({ onAdd, categories }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onAdd({
                name: e.target.elements.name.value,
                date: e.target.elements.date.value,
                amount: e.target.elements.amount.value,
                category: e.target.elements.category.value
            });
        }}>
            <h3>Add New Expense</h3>
            <label>Name: <input required name="name" /></label>
            <label>Budget: <input required name="date" /></label>
            <label>Amount: <input required name="amount" /></label>
            <label>Category: <select name="category" {...this.props.categories._id} required /></label>
            <button>type="submit">Add</button>
        </form >
    );
}

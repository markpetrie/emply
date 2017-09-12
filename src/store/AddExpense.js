
import React from 'react';
// import Category from './Categories';

export default function addExpense({ onAdd, categories }) {

    const renderCategoryOptions = (category) => (
        <option key={category._id} value={category._id}>{category.name}</option>
    )

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

            <h2>Add New Expense</h2>
            <input required name="name" />
            <input required name="date" />
            <input required name="amount" />
            <select name="category" {...categories._id} required>
                <option value="">Select</option>
                {categories.map(renderCategoryOptions)}
            </select>
            <button type="submit">Add</button>
        </form >
    );
}


import React from 'react';

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
                <h3>Add New Expense</h3>
                <label>Name: <input required name="name" /></label>
                <label>Date: <input required name="date" /></label>
                <label>Amount: <input required name="amount" /></label>
                <label>Category: <select name="category" required>
                    <option value="">Select</option>
                    {categories.map(renderCategoryOptions)}
                </select></label>
                <button type="submit" style={{ margin: '5px', padding: '5px' }}>Add</button>
            </form >
    );
}
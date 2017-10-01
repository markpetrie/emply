import React from 'react';

export default function UpdateCategory({ onUpdate }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onUpdate({
                name: e.target.elements.name.value,
                amount: e.target.elements.amount.value,
                department: e.target.elements.department.value
            });
        }}>
            <h3>Add New Category</h3>
            <label>Name: <input required name="name" /> </label>
            <label>Budget: <input required name="amount" /> </label>
            <label>Department: <input name="department" /> </label>
            <button type="submit">Add</button>
        </form>
    );
}
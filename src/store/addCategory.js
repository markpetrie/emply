
import React from 'react';

export default function AddCategory({ onAdd }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onAdd({
                name: e.target.elements.name.value,
                budget: e.target.elements.budget.value,
                department: e.target.elements.department.value
            });
        }}>
            <input required name="name" />
            <input required budget="budget" />
            <input department="department" />
            <button type="submit">Add</button>
        </form>
    );
}

import React from 'react';

export default function AddCategory({ onAdd }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onAdd({
                name: e.target.elements.name.value,
                amount: e.target.elements.amount.value,
                department: e.target.elements.department.value
            });
        }}>
            <input required name="name" />
            <input required name="amount" />
            <input name="department" />
            <button type="submit">Add</button>
        </form>
    );
}

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
            <h3>Add New Category</h3>
            <label>Name: <input required name="name" /> </label>
            <label>Budget Amount: <input required name="amount" /> </label>
            <label>Category: 
                <select name="department" required>
                    <option value="HR">HR</option>
                    <option value="Product">Product</option>
                    <option value="Finance">Finance</option>
                    <option value="Engineering">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </label>
            <button type="submit" style={{ margin: '5px', padding: '10px' }}>ADD</button>
        </form>
    );
}
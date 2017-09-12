
import React from 'react';
import Dashboard from './Dashboard';
import AddCategory from './addCategory';

export default function Categories({ categories, loading, error, addCategory }) {

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {/* <ul>
                {categories.map(category => (
                    <li key={category._id}>NAME: {category.name}  BUDGET: {category.amount} DEPT: {category.department}</li>
                ))}
            </ul> */}
            {error && error.map(err => <pre>{err}</pre>)}
            <Dashboard categories={categories}/>
            <AddCategory onAdd={addCategory} />
        </div>
    );
}
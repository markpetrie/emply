
import React from 'react';
import AddCategory from './AddCategory';
import CategoriesTable from './CategoriesTable';

export default function Categories({ categories, loading, error, addCategory, updateCategory }) {

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {/* <ul>
                {categories.map(category => (
                    <li key={category._id}>NAME: {category.name}  BUDGET: {category.amount} DEPT: {category.department}</li>
                ))}
            </ul> */}
            {error && error.map(err => <pre>{err}</pre>)}
            <div style={{ display: 'flex 3', flexFlow: 'row' }}>
                <CategoriesTable categories={categories} onUpdate={updateCategory} />
            </div>
            <div>
                <div style={{ display: 'flex 1', flexFlow: 'row' }}>
                    <AddCategory onAdd={addCategory} />
                </div>
            </div>
            <br />
        </div>
    );
}
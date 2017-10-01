
import React from 'react';
import AddCategory from './AddCategory';
import CategoriesTable from './CategoriesTable';

export default function Categories({ categories, loading, error, addCategory, updateCategory }) {

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div>
                {error && <pre>{error.toString()}</pre>}
                <div style={{ display: 'flex 3', flexFlow: 'row' }}>
                    <CategoriesTable categories={categories} onUpdate={updateCategory} />
                </div>
                <div>
                    <div style={{ display: 'flex 1', flexFlow: 'row' }} />
                    <AddCategory onAdd={addCategory} />
                </div>
            </div>
            <br />
        </div>
    )
}
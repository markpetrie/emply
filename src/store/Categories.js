
import React from 'react';
import AddCategory from './addCategory';

export default function Categories({ categories, loading, error, addCategory }) {

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <ul>
                {categories.map(category => (
                    <li key={category._id}>{category.name}</li>
                ))}
            </ul>
            {error && error.map(err => <pre>{err}</pre>)}
            <AddAlbum onAdd={addAlbum} />
        </div>
    );
}
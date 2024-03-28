import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}/products`}>
              {category.image && <img src={category.image} alt={category.name} />}
              <h3>{category.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

import React from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}/products`}>
              <CategoryItem category={category} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

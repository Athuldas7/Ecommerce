import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item">
      <Link to={`/categories/${category.id}/products`}>
        <img src={category.image} alt={category.name} />
        <h3>{category.name}</h3>
      </Link>
    </div>
  );
};

export default CategoryItem;

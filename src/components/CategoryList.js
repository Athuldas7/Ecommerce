import React from 'react';
import { Link } from 'react-router-dom';
import "./CategoryList.css";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list container">
    <h1 className="title">Categories</h1>
    <div className="category-grid container">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <Link to={`/categories/${category.id}/products`} className="category-link">
            {category.image && <img src={category.image} alt={category.name} className="rounded-image" />}
            <h3>{category.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
};


export default CategoryList;

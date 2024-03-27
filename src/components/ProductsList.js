import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductItem product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

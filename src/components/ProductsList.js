import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
            <button>Add to Cart</button>  {/* Functionality not implemented in this example */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

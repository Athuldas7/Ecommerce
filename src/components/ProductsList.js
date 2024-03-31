import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  return (
    <div className=''>
      <div className="card" style={{ width: '18rem', backgroundColor: '#e6e6e6' }}>
        <div className="card-body">
          <Link to={`/products/${product.id}`} className='link-heading'> {/* Corrected syntax */}
            <h5 className="card-title">{product.title}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-body-secondary">{product.subtitle}</h6>
          <p className="card-text">{product.text}</p>
          <div className="d-flex justify-content-between">
            <p className="card-text">${product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="product-list container">
      <h2 className='mb-20'>Products</h2>
      <div>
        <div className="row row-cols-4 row-cols-md-4 g-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

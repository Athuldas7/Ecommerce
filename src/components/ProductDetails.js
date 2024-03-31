import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/products';
import "./ProductDetails.css";
const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(productId);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details container">
    <div className="row ">
      <div className="col-md-6">
        <img src={product.images} alt={product.title} className="img-fluid mt-20"  />
      </div>
      <div className="col-md-6 d-flex align-items-start flex-column">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button className="custom-button">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};
  


export default ProductDetails;

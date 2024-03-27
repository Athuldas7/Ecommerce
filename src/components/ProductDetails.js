import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/products';

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
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;

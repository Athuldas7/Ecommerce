import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/categories";
import { ProductCard } from "./ProductsList";

const CategoryProductsList = () => {
  const [product, setProduct] = useState(null);
  const { categoryId } = useParams();
  console.log(`Category id ${categoryId}`);
  console.log(`product ${product}`);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const fetchedProduct = await getProductsByCategory(categoryId);
      setProduct(fetchedProduct);
    };

    fetchProductsByCategory();
  }, [categoryId]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-list container ">
      <h2 className="mb-20">Category { categoryId }</h2>
      <div>
        <div className="row row-cols-4 row-cols-md-4  g-4">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsList;
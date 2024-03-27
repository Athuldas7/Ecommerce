export const getProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    return response.json();
  };
  
  export const getProduct = async (productId) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
    return response.json();
  };
  
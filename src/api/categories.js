export const getCategories = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    return response.json();
  };
  
  export const getProductsByCategory = async (categoryId) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
    return response.json();
  };
  
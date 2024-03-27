import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import UserList from './components/UsersList';
import { getProducts, getCategories, getUsers } from './api';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchProducts();
    fetchCategories();
    fetchUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/categories" element={<CategoryList categories={categories} />} />
        <Route path="/categories/:categoryId/products" element={<ProductList products={products} />} />
        <Route path="/users" element={<UserList users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;

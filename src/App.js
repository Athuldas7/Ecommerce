import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import UserList from './components/UsersList';
import { getProducts } from './api/products';
import { getCategories } from './api/categories';
import { getUsers } from './api/users';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const filterProducts = () => {
    if (selectedCategoryId) {
      return products.filter((product) => product.category.id === selectedCategoryId);
    } else {
      return products;
    }
  };

  return (
    <Router>
      <nav>
        <button onClick={() => window.location.href = '/categories'}>Categories</button>
        <button onClick={() => window.location.href = '/users'}>Users</button>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList products={filterProducts()} />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route
          path="/categories"
          element={<CategoryList categories={categories} onCategoryClick={handleCategoryClick} />}
        />
        <Route
          path="/categories/:categoryId/products"
          element={<ProductList products={filterProducts()} />}
        />
        <Route path="/users" element={<UserList users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
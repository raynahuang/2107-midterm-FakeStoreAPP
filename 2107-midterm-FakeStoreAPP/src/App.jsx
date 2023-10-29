import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '..//pages/ProductPage/ProductPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
//import LoginPage from './LoginPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
//import RegisterPage from './RegisterPage';
//import WishListPage from './WishListPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product"  element={<ProductDetailPage />} />
        
      </Routes>
    </div>
  );
}

export default App;

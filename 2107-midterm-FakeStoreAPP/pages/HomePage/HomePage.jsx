import React from 'react';
import { Link } from 'react-router-dom';
import Face4Icon from '@mui/icons-material/Face4';
import Button from '@mui/material/Button';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </div>
        <div className="header-right">
          <Link to="/register">
            <Face4Icon />
          </Link>
        </div>
      </header>

      <div className="middle-content">
        <div className="left-content">
          <h2 className="slogan">Discover Amazing Products</h2>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/product"
            className="shop-now-button"
          >
            Shop Now
          </Button>
        </div>
        <div className="right-content">
          <div className="image-container">
            <img src="i-electronic.jpg" alt="Electronics" className="product-image" />
          </div>
          <div className="image-container">
            <img src="i-jewelery.jpg" alt="Jewelry" className="product-image" />
          </div>
          <div className="image-container">
            <img src="i-women.jpg" alt="Women" className="product-image" />
          </div>
          <div className="image-container">
            <img src="i-men.jpg" alt="Men" className="product-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

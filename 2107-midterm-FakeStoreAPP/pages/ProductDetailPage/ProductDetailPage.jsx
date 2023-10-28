import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { productId } = useParams(); // Get the productId from the route
  const [product, setProduct] = useState(null);

  const API_URL = `https://fakestoreapi.com/products/`;

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
      } else {
        console.error('Error fetching product details');
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

ProductDetailPage.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ProductDetailPage;

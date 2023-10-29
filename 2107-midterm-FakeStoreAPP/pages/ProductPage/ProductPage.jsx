import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../src/components/ProductCard/ProductCard";
import { Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Fetch product data from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleGoBack = () => {
    // Use the navigate function to go back to the home page
    navigate("/");
  };

  return (
    <Container>
      <Button variant="outlined" color="primary" onClick={handleGoBack}>
        Go Back
      </Button>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;

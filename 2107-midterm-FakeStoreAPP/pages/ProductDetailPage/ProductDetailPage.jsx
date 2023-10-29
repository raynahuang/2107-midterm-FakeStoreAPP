import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        {product ? (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                alt={product.title}
                image={product.image}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4">Product Details</Typography>
                <Typography variant="body2">
                  <strong>Title:</strong> {product.title}
                </Typography>
                <Typography variant="body2">
                  <strong>Price:</strong> ${product.price}
                </Typography>
                <Typography variant="body2">
                  <strong>Description:</strong> {product.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Category:</strong> {product.category}
                </Typography>
                <Typography variant="body2">
                  <strong>Rating:</strong> Rate: {product.rating.rate} (Count: {product.rating.count})
                </Typography>
                <Button variant="outlined" color="primary" component={Link} to="/home">
                  Go Back
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Box display="flex" alignItems="center" marginTop={2}>
            <Typography variant="body2">Loading...</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProductDetailPage;

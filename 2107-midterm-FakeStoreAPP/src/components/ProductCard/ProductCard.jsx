import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

// Import styled from @mui/system
import { styled } from "@mui/system";

// Define a styled component for the Card
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  height: "420px",
  margin: "2px",
  borderRadius: "1rem",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  position: "relative", // Set the position to relative
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: "200px",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  margin: "0.5rem",
  fontFamily: "'Josefin Sans', sans-serif",
}));

const StyledPrice = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "bold",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  position: "absolute", // Set the position to absolute
  bottom: "10px", // Adjust the distance from the bottom
  left: "10px", // Adjust the distance from the left
  fontFamily: "'Josefin Sans', sans-serif",
}));

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt={product.title}
        image={product.image}
      />
      <CardContent>
        <StyledTitle variant="subtitle1">
          {product.title}
        </StyledTitle>
        <StyledPrice variant="body2">
          ${product.price}
        </StyledPrice>
      </CardContent>
      <StyledButton
        variant="outlined"
        color="primary"
        component={Link} to={`/product/${product.id}`}
      >
        Learn More
      </StyledButton>
    </StyledCard>
  );
};

export default ProductCard;

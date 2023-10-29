import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        image={product.image}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="subtitle1">${product.price}</Typography>
      </CardContent>
      <Button
        variant="outlined"
        color="primary"
        component={Link} to={`/product/${product.id}`}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default ProductCard;

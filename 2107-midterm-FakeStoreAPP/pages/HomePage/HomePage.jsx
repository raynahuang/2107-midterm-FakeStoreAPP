import { useState, useEffect } from 'react'; // Only import useState and useEffect
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* You can add more product information here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data, "response");
    setProducts(response.data ?? []);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products?.map((product) => (
          <li
            style={{ marginBottom: "20px", border: "1px solid #ccc" }}
            key={product.id}
          >
            <p>Title: {product.title}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <Link to={`/products/${product.id}`}>View detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

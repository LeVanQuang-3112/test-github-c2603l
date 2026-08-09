import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, handleDelete, setRecord }) {
  return (
    <div
      style={{ marginBottom: "20px", border: "1px solid #ccc" }}
      key={product.id}
    >
      <p>Title: {product.title}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <Link to={`/products/${product.id}`}>View detail</Link>
      <button onClick={() => handleDelete(product.id)}>Xoá</button>
      <button onClick={() => setRecord(product)}>Cập nhật</button>
    </div>
  );
}

export default ProductCard;

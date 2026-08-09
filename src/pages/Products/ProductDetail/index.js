import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../../hooks/product/useProduct";

function ProductDetail() {
  const { id } = useParams();
  const { products, loading } = useProduct();

  const [product, setProduct] = useState(null);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data ?? null);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h1>Product Detail page</h1>
      <p>Product id: {id}</p>
      {product && (
        <div>
          <p>Title: {product.title}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <img alt="img" src={product.image} />
        </div>
      )}
      {/* Danh sách sản phẩm liên quan  */}
      <div>
        <Link to="/products/2">Xem sản phẩm liên quan</Link>
      </div>
    </div>
  );
}

export default ProductDetail;

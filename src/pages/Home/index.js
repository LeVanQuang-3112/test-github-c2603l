import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/product/useProduct";
import ProductCard from "../../components/ProductCard";

function Home() {
  const { products, loading } = useProduct();
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [record, setRecord] = useState();

  useEffect(() => {
    handleFilter();
  }, [search, products]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = () => {
    // Call API bên trong
    setFilterProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleDelete = (id) => {
    const newProducts = filterProducts.filter((product) => product.id !== id);
    setFilterProducts(newProducts);
  };

  console.log(record, "record");

  return (
    <div>
      <h1>Home page</h1>
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={handleSearch}
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          width: "300px",
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {filterProducts?.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              handleDelete={handleDelete}
              setRecord={setRecord}
            />
          ))}
        </div>
      )}
      <Link to="/products">Đi tới màn hình products</Link>
    </div>
  );
}

export default Home;

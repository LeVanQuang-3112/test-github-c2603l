import { useEffect, useState } from "react";
import { getListProduct } from "../../services/product.service";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await getListProduct();
      setProducts(response.data ?? []);
      setLoading(false);
      console.log(response, "response");
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    products,
    setProducts,
    loading,
    setLoading,
    fetchProduct,
  };
};

export default useProduct;

import axiosInstance from "../utils/axios";

export const getListProduct = () => {
  return axiosInstance.get("/products");
};

export const getProductById = (id) => {
  return axiosInstance.get(`/product/${id}`);
};

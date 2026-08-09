import axiosInstance from "../utils/axios";

export const login = (email, password) => {
  console.log(email, password);
  return axiosInstance.post("/auth/login", {
    username: email,
    password: password,
  });
};

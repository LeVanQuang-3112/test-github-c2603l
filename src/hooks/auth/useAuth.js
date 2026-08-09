import { useState } from "react";
import { login } from "../../services/auth.service";

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const loginModel = async (email, password) => {
    setLoading(true);
    try {
      const response = await login(email, password);
      console.log(response, "response");
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    loginModel,
  };
};

export default useAuth;

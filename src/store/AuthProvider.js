import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "Nguyen Van A",
    age: 20,
  });

  const onCallbackForA = () => {
    setUserInfo({
      name: "Nguyen Van A",
      age: 20,
    });
  };

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, onCallbackForA }}>
      {children}
    </AuthContext.Provider>
  );
};

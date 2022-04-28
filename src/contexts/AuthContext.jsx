import { createContext, useContext } from "react";
import { useUserData } from "../custom_hooks";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const userObj = useUserData();
  return (
    <AuthContext.Provider value={{ ...userObj }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`use useAuth must be used inside a context provider`);
  }
  return context;
};
export { AuthProvider, useAuth };

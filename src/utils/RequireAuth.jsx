import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";

export const RequireAuth = () => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};

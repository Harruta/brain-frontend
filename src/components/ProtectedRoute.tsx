import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("token"); 

  return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;

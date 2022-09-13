import { useAppContext } from "../../context/appContext";
import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  const location = useLocation();
  if (!user)
    return (
      <Navigate
        to="/signin?login=true"
        state={{ lastPath: location.pathname + location.search }}
      />
    );
  return children;
};
export default ProtectedRoute;

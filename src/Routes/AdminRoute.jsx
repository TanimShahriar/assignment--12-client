import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = (children) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(location.pathname);

  if (loading || isAdminLoading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
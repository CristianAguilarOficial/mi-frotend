import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { useEffect } from "react";

function ProtectedRouter() {
  const { loading, isAuthenticated } = useAuth();

  useEffect(() => {
    // Forzar verificación adicional del token cuando se intenta acceder a rutas protegidas
    if (!loading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [loading, isAuthenticated]);

  if (loading)
    return <h1 className="text-white font-bold size-1.5">loading.....</h1>;

  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}
export default ProtectedRouter;

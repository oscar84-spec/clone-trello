import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { verifySession } from "../services/users";
import { SkeletonDashboard } from "../Components";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const getDataSession = async () => {
      try {
        const res = await verifySession();
        setIsAuthenticated(!!res);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    getDataSession();
  }, []);

  if (isAuthenticated === null) return <SkeletonDashboard />;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

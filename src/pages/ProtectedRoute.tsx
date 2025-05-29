import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { verifySession } from "../services/users";

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

  if (isAuthenticated === null)
    return (
      <span className="text-lg text-text-color font-medium md:text-xl lg:text-2xl">
        Verificando sesión...
      </span>
    );

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

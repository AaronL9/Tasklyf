import { ReactNode } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

function Authorization({ children }: { children: ReactNode }) {
  const { user } = useAuthContext();

  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default Authorization;

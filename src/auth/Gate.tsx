import { ReactNode } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

function Gate({ children }: { children: ReactNode }) {
  const { user } = useAuthContext();

  if (user) return <Navigate to="/" replace />;

  return children;
}

export default Gate;

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function PublicRoute() {
  const { isLoggedIn, currentUser } = useContext(UserContext);
  if (isLoggedIn) return <Navigate to={`/user/${currentUser.id}`} replace />;
  return <Outlet />;
}

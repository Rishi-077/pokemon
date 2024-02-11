import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const status = localStorage.getItem("status");
  const accessToken = localStorage.getItem("Local_User");

  if (!status && (!accessToken || accessToken === undefined)) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  } else {
    return children;
  }
};

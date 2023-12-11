import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = ({ isAuth, children, onLogout }) => {
  if (isAuth) {
    return <div className="content"><Navbar 
    onLogout={onLogout}/>{children}</div>;
  } else {
    return <Navigate to="/login"/>
  }
};
export default ProtectedRoute;

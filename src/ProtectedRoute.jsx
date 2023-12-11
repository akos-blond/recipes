import { useEffect } from "react";
import { useNavigate} from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
    const navigate = useNavigate();

    useEffect(() =>{
    if (!user) {
      return navigate("/");
    } else {
      return navigate("/home")
    }
    })
    return children;
  };

  export default ProtectedRoute;
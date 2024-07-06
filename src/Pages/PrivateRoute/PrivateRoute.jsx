import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(user)
    if(loading){
        return <div className="min-h-screen flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }
   if(user?.email){
    return children
   }
    return <Navigate state={location.pathname} replace></Navigate>
};

export default PrivateRoute;
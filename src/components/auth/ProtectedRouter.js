
import {  useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children , roles}) => {
    const navigate = useNavigate();
    return children;

    // if(roles.includes('all')) return children;




    // const role = getRole();
    // if(role){
    //     if(roles.includes(role)) return children;
    // }
    // navigate('/unauthorize');
    // return null;
}

export default ProtectedRoute

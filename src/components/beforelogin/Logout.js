import React, {useContext} from 'react';
import { Navigate  } from 'react-router-dom'
import UserContext from '../../UserContext';

const Logout = () => {
  const userContext = useContext(UserContext)
  localStorage.clear()
 // window.location.href = '/?logout=true'
  userContext.setUser({
    isAuthen: false
  })
    
    return <Navigate to="/?logout=true"></Navigate>
};

export default Logout;

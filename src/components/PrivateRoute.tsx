import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/autchContext';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authCtx = useContext(AuthContext);
  const isLogged = authCtx?.isLogged;
  if (!isLogged) {
    return <Navigate to='/login' />;
  }
  return children;
};

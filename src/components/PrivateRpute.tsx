import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authUser = true;
  if (!authUser) {
    return <Navigate to='/login' />;
  }
  return children;
};

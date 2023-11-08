import React, { useContext } from 'react';
import { AppContext, AppContextType } from './context/AppContext';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const { isAuthenticated } = useContext(AppContext) as AppContextType;

  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return (
    <div>
      <Component />
    </div>
  );
};

export { PrivateRoute };

import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { AuthAtom } from '../atoms/auth';
import * as routePaths from '../constants/paths';
import DashboardLayout from '../pages/dashboard';


export const PrivateRoute = () => {
  const token = useRecoilValue(AuthAtom)
  return token ? <DashboardLayout /> : <Navigate to={routePaths.login} />
}

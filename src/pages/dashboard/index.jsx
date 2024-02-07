import React, { useEffect } from 'react';

import Admin from './admin';
import Student from './student';
import Teacher from './teacher';
import Parent from './parent';
import { getUser } from '../../constants/user/actions';

import Preloader from '../../components/preloader';

import { useStateProvider } from '../../store';
import { useRecoilValue } from 'recoil';
import { currentUserAtom } from '../../atoms/currentUser';
import { useUserActions } from '../../actions/profile';

const DashboarLayouts = {
  admin: Admin,
  student: Student,
  teacher: Teacher,
  parent: Parent,
};

const Dashboard = props => {
  const currentUser  = useRecoilValue(currentUserAtom);
  const { getProfile } = useUserActions();

  useEffect(() => {
    getProfile();
  }, [currentUser?.role]);

  if (!currentUser?.role) return <Preloader />;

  const Component = DashboarLayouts[currentUser.role];
  console.log('Dashboard or currentUser.role', currentUser.role);
  return <Component {...props} />;
};

export default Dashboard;

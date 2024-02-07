import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import NotFound from './pages/404';
import DashboardLayout from './pages/dashboard';
import LoginPage from './pages/login';

import { PrivateRoute, PublicRoute } from './routes/customRoutes';

// import { StateProvider } from './store';

import * as studentPaths from './constants/students/paths';
import * as teacherPaths from './constants/teachers/paths';
import * as programPaths from './constants/programs/paths';
import * as programLevelPaths from './constants/level_programs/paths';
import * as routePaths from './constants/paths';
import * as classRoutinePaths from './constants/classRoutines/paths';
import * as coursePaths from './constants/courses/paths';

import DashboardAdmin from './components/dashboards/admin';
import EditStudent from './pages/students/edit';
import ShowStudent from './pages/students/show';
import AddStudent from './pages/students/new';
import StudentList from './pages/students/list';
export default () => (
  <RecoilRoot>
    {/* <StateProvider> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path={"students"} element={<StudentList />}>
            <Route path={"new"} element={<AddStudent />} />
            <Route path={":id"} element={<ShowStudent />} />
            <Route path={":id/edit"} element={<EditStudent />} />
          </Route>
        </Route>
        <Route path={routePaths.login} element={<LoginPage />} />

        {/* <PrivateRoute */}
        {/*   path={routePaths.root} */}
        {/*   element={<DashboardLayout />} */}
        {/* /> */}
        {/* <PublicRoute path={routePaths.login} element={<LoginPage />} /> */}
        {/* <PrivateRoute path={routePaths.dashboard} element={<DashboardLayout />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* </StateProvider> */}
  </RecoilRoot>
);

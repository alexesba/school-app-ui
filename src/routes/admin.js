import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as studentPaths from '../constants/students/paths';
import * as teacherPaths from '../constants/teachers/paths';
import * as programPaths from '../constants/programs/paths';
import * as programLevelPaths from '../constants/level_programs/paths';
import * as routePaths from '../constants/paths';
import * as classRoutinePaths from '../constants/classRoutines/paths';
import * as coursePaths from '../constants/courses/paths';

import DashboardAdmin from '../components/dashboards/admin';
import EditStudent from '../pages/students/edit';
import ShowStudent from '../pages/students/show';
import AddStudent from '../pages/students/new';
import StudentList from '../pages/students/list';

import TeacherList from '../pages/teachers/list';
import EditTeacher from '../pages/teachers/edit';
import AddTeacher from '../pages/teachers/new';
import ShowTeacher from '../pages/teachers/show';

import AddProgram from '../pages/programs/new';
import ProgramList from '../pages/programs/list';

import AddLevelProgram from '../pages/level_programs/new';
import LevelProgramList from '../pages/level_programs/list';

import AddClassRoutine from '../pages/classRoutines/new';

import AddCourse from '../pages/courses/new';
import CourseList from '../pages/courses/list';

const AdminRoutes = () => (
  <Routes>
    <Route path={routePaths.root} element={<DashboardAdmin />} />
    <Route path={routePaths.dashboard} element={<DashboardAdmin />} />

    <Route path={studentPaths.index} element={<StudentList />} />
    <Route path={studentPaths.add} element={<AddStudent />} />
    <Route path={studentPaths.show} element={<ShowStudent />} />
    <Route path={studentPaths.edit} element={<EditStudent />} />

    <Route path={teacherPaths.index} element={<TeacherList />} />
    <Route path={teacherPaths.add} element={<AddTeacher />} />
    <Route path={teacherPaths.show} element={<ShowTeacher />} />
    <Route path={teacherPaths.edit} element={<EditTeacher />} />

    <Route path={programPaths.add} element={<AddProgram />} />
    <Route path={programPaths.index} element={<ProgramList />} />

    <Route path={programLevelPaths.index} element={<LevelProgramList />} />
    <Route path={programLevelPaths.add} element={<AddLevelProgram />} />

    <Route path={classRoutinePaths.add} element={<AddClassRoutine />} />

    <Route path={coursePaths.index} element={<CourseList />} />
    <Route path={coursePaths.add} element={<AddCourse />} />

  </Routes>
);

export default AdminRoutes;

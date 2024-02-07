import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import combineReducers from 'react-combine-reducers';

import * as authReducer from './reducers/auth';
import * as userReducer from './reducers/user';
import * as studentReducer from './reducers/student';
import * as teacherReducer from './reducers/teacher';
import * as roleReducer from './reducers/role';
import * as alertReducer from './reducers/alert';
import * as programReducer from './reducers/program';
import * as levelReducer from './reducers/level';
import * as courseReducer from './reducers/course';
import * as levelProgramReducer from './reducers/levelProgram';

const [rootReducerCombined, initialStateCombined] = combineReducers({
  auth: [authReducer.reducer, authReducer.initialState],
  currentUser: [userReducer.reducer, userReducer.initialState],
  student: [studentReducer.reducer, studentReducer.initialState],
  teacher: [teacherReducer.reducer, teacherReducer.initialState],
  role: [roleReducer.reducer, roleReducer.initialState],
  alert: [alertReducer.reducer, alertReducer.initialState],
  program: [programReducer.reducer, programReducer.initialState],
  level: [levelReducer.reducer, levelReducer.initialState],
  course: [courseReducer.reducer, courseReducer.initialState],
  levelProgram: [levelProgramReducer.reducer, levelProgramReducer.initialState],
});

const store = createContext(initialStateCombined);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    rootReducerCombined,
    initialStateCombined,
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useStateProvider = () => useContext(store);

StateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { StateProvider, useStateProvider };

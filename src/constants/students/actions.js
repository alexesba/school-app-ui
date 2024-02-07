// import StudentService from '../../services/Student';

import { showAlert } from '../alerts/actions';

export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const GET_STUDENTS_START = 'GET_STUDENTS_START';
export const GET_STUDENT_SUCCESS = 'GET_STUDENT_SUCCESS';
export const GET_STUDENT_START = 'GET_STUDENT_START';

export const CREATE_STUDENT_START = 'CREATE__STUDENT_START';
export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS';

export const UPDATE_STUDENT_START = 'UPDATE_STUDENT_START';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';

export const RESET_STUDENT_FORM = 'RESET_STUDENT_FORM';

export const REMOVE_STUDENT_START = 'REMOVE_STUDENT_START';
export const REMOVE_STUDENT_SUCCESS = 'REMOVE_STUDENT_SUCCESS';

export const getStudentsSuccess = payload => ({
  type: GET_STUDENTS_SUCCESS,
  payload,
});

export const getStudentSuccess = payload => ({
  type: GET_STUDENT_SUCCESS,
  payload,
});

const getStudentsStart = () => ({
  type: GET_STUDENTS_START,
});


const getStudentStart = () => ({
  type: GET_STUDENT_START,
});

const updateStudentStart = () => ({
  type: UPDATE_STUDENT_START,
});

export const updateStudentSuccess = payload => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload,
});

const createStudentStart = () => ({
  type: CREATE_STUDENT_START,
});

export const createStudentSuccess = payload => ({
  type: CREATE_STUDENT_SUCCESS,
  payload,
});

export const resetStudentForm = () => ({
  type: RESET_STUDENT_FORM,
});

export const getStudents = (payload = {}, dispatch = () => {}) => {
  dispatch(getStudentsStart());
  /* return StudentService.getAll(payload).then(
  response => {
      return response
    })
    .catch(error => console.error(error))
    .then(users => dispatch(getStudentsSuccess(users))); */
};

export const getStudent = (payload = {}, dispatch = () => {}) => {
  dispatch(getStudentStart());
  /* return StudentService.getOne(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(user => dispatch(getStudentSuccess(user))); */
};

export const updateStudent = (payload = {}, dispatch = () => {}) => {
  dispatch(updateStudentStart());
  /* return StudentService.update(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(user => {
      dispatch(
        showAlert({
          alertType: 'success',
          message: `The user ${user.name}, with email: ${user.email} has been updated successfully`,
          autoClose: true,
        }),
      );
      dispatch(updateStudentSuccess(user));
    }); */
};

export const removeStudentStart = () => ({
  type: REMOVE_STUDENT_START,
});

export const removeStudentSuccess = payload => ({
  type: REMOVE_STUDENT_SUCCESS,
  payload,
});

export const deleteStudent = (userId, dispatch = () => {}) => {
  dispatch(removeStudentStart());
  /* return StudentService.destroy(userId).then(response => response.data)
    .then(user => {
      dispatch(removeStudentSuccess(user));
      return user;
    })
    .catch(error => console.warn(error)); */
};

export const createStudent = (payload = {}, dispatch = () => {}) => {
  dispatch(createStudentStart());
  /* return StudentService.create(payload).then(response => response.data)
    .then(student => {
      dispatch(createStudentSuccess(student));
      return student;
    })
    .catch(error => console.error(error)); */
};

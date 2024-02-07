// import TeacherService from '../../services/Teacher';
import { showAlert } from '../alerts/actions';

export const GET_TEACHERS_SUCCESS = 'GET_TEACHERS_SUCCESS';
export const GET_TEACHERS_START = 'GET_TEACHERS_START';
export const GET_TEACHER_SUCCESS = 'GET_TEACHER_SUCCESS';
export const GET_TEACHER_START = 'GET_TEACHER_START';
export const CLEAN_TEACHER_FORM = 'CLEAN_TEACHER_FORM';

export const UPDATE_TEACHER_START = 'UPDATE_TEACHER_START';
export const UPDATE_TEACHER_SUCCESS = 'UPDATE_TEACHER_SUCCESS';
export const REMOVE_TEACHER_START = 'REMOVE_TEACHER_START';
export const REMOVE_TEACHER_SUCCESS = 'REMOVE_TEACHER_SUCCESS';
export const CREATE_TEACHER_START = 'CREATE__TEACHER_START';
export const CREATE_TEACHER_SUCCESS = 'CREATE_TEACHER_SUCCESS';

export const cleanTeacherForm = () => ({
  type: CLEAN_TEACHER_FORM,
});

export const getTeachersSuccess = payload => ({
  type: GET_TEACHERS_SUCCESS,
  payload,
});

export const getTeacherSuccess = payload => ({
  type: GET_TEACHER_SUCCESS,
  payload,
});

const getTeachersStart = () => ({
  type: GET_TEACHERS_START,
});


const getTeacherStart = () => ({
  type: GET_TEACHER_START,
});

const updateTeacherStart = () => ({
  type: UPDATE_TEACHER_START,
});

export const updateTeacherSuccess = payload => ({
  type: UPDATE_TEACHER_SUCCESS,
  payload,
});

const createTeacherStart = () => ({
  type: CREATE_TEACHER_START,
});

export const createTeacherSuccess = payload => ({
  type: CREATE_TEACHER_SUCCESS,
  payload,
});

export const getTeachers = (payload = {}, dispatch = () => {}) => {
  dispatch(getTeachersStart());
  /* return TeacherService.getAll(payload).then(response => response.data)
    .then(teachers => dispatch(getTeachersSuccess(teachers)))
    .catch(error => console.error(error)); */
};

export const getTeacher = (payload = {}, dispatch = () => {}) => {
  dispatch(getTeacherStart());
  /* return TeacherService.getOne(payload).then(response => response.data)
    .then(teacher => dispatch(getTeacherSuccess(teacher)))
    .catch(error => console.error(error)); */
};

export const updateTeacher = (payload = {}, dispatch = () => {}) => {
  dispatch(updateTeacherStart());
  /* return TeacherService.update(payload).then(response => response.data)
    .then(teacher => {
      dispatch(updateTeacherSuccess(teacher));

      dispatch(
        showAlert({
          alertType: 'success',
          message: 'The teacher has been updated successfully',
          autoClose: true,
        }),
      );
    })
    .catch(error => console.error(error)); */
};

export const removeTeacherStart = () => ({
  type: REMOVE_TEACHER_START,
});

export const removeTeacherSuccess = payload => ({
  type: REMOVE_TEACHER_SUCCESS,
  payload,
});


export const deleteTeacher = (teacherId, dispatch = () => {}) => {
  dispatch(removeTeacherStart());
  /* return TeacherService.destroy(teacherId).then(response => response.data)
    .then(teacher => {
      dispatch(removeTeacherSuccess(teacher));
      return teacher;
    })
    .catch(error => console.warn(error)); */
};

export const createTeacher = (payload = {}, dispatch = () => {}) => {
  dispatch(createTeacherStart());
  /* return TeacherService.create(payload).then(response => response.data)
    .then(teacher => {
      dispatch(createTeacherSuccess(teacher));
      return teacher;
    })
    .catch(error => console.error(error)); */
};

// import CourseService from '../../services/Course';
import { showAlert } from '../alerts/actions';

export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_START = 'GET_COURSES_START';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_START = 'GET_COURSE_START';

export const CREATE_COURSE_START = 'CREATE__COURSE_START';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';

export const UPDATE_COURSE_START = 'UPDATE_COURSE_START';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

export const RESET_COURSE_FORM = 'RESET_COURSE_FORM';

export const REMOVE_COURSE_START = 'REMOVE_COURSE_START';
export const REMOVE_COURSE_SUCCESS = 'REMOVE_COURSE_SUCCESS';

export const getCoursesSuccess = payload => ({
  type: GET_COURSES_SUCCESS,
  payload,
});

export const getCourseSuccess = payload => ({
  type: GET_COURSE_SUCCESS,
  payload,
});

const getCoursesStart = () => ({
  type: GET_COURSES_START,
});


const getCourseStart = () => ({
  type: GET_COURSE_START,
});

const updateCourseStart = () => ({
  type: UPDATE_COURSE_START,
});

export const updateCourseSuccess = payload => ({
  type: UPDATE_COURSE_SUCCESS,
  payload,
});

const createCourseStart = () => ({
  type: CREATE_COURSE_START,
});

export const createCourseSuccess = payload => ({
  type: CREATE_COURSE_SUCCESS,
  payload,
});

export const resetCourseForm = () => ({
  type: RESET_COURSE_FORM,
});

export const getCourses = (payload = {}, dispatch = () => {}) => {
  dispatch(getCoursesStart());
  /* return CourseService.getAll(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(users => dispatch(getCoursesSuccess(users))); */
};

export const getCourse = (payload = {}, dispatch = () => {}) => {
  dispatch(getCourseStart());
  /* return CourseService.getOne(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(user => dispatch(getCourseSuccess(user))); */
};

export const updateCourse = (payload = {}, dispatch = () => {}) => {
  dispatch(updateCourseStart());
  /* return CourseService.update(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(course => {
      dispatch(
        showAlert({
          alertType: 'success',
          message: `The user ${course.name} been updated successfully`,
          autoClose: true,
        }),
      );
      dispatch(updateCourseSuccess(course));
    }); */
};

export const removeCourseStart = () => ({
  type: REMOVE_COURSE_START,
});

export const removeCourseSuccess = payload => ({
  type: REMOVE_COURSE_SUCCESS,
  payload,
});

export const deleteCourse = (userId, dispatch = () => {}) => {
  dispatch(removeCourseStart());
  return CourseService.destroy(userId).then(response => response.data)
    .then(user => {
      dispatch(removeCourseSuccess(user));
      return user;
    })
    .catch(error => console.warn(error));
};

export const createCourse = (payload = {}, dispatch = () => {}) => {
  dispatch(createCourseStart());
  return CourseService.create(payload).then(response => response.data)
    .then(course => {
      dispatch(createCourseSuccess(course));
      return course;
    })
    .catch(error => {
      const { response: { data: { errors } } } = error;


      dispatch(
        showAlert({
          alertType: 'warning',
          message: (errors && errors.join(', ')) || error.toString(),
          autoClose: true,
        }),
      );
    });
};

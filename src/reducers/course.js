import {
  GET_COURSES_SUCCESS,
  GET_COURSE_SUCCESS,
  GET_COURSES_START,
  GET_COURSE_START,
  RESET_COURSE_FORM,
  CREATE_COURSE_SUCCESS,
  REMOVE_COURSE_SUCCESS,
} from '../constants/courses/actions';

const distinctCourse = id => course => course.id !== id;

export const initialState = {
  courseList: [],
  isLoading: false,
  course: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_COURSE_FORM: {
      return { ...state, course: undefined };
    }
    case GET_COURSES_SUCCESS: {
      const { results, ...pagination } = action.payload;
      return {
        ...state,
        courseList: action.payload.results,
        ...pagination,
        isLoading: false,
      };
    }
    case GET_COURSE_SUCCESS: {
      return { ...state, course: action.payload, isLoading: false };
    }
    case CREATE_COURSE_SUCCESS: {
      return { ...state, course: action.payload, isLoading: false };
    }
    case GET_COURSES_START:
    case GET_COURSE_START:
      return { ...state, isLoading: true };
    case REMOVE_COURSE_SUCCESS: {
      return {
        ...state,
        courseList: state.courseList.filter(
          distinctCourse(action.payload.id),
        ),
      };
    }
    default:
      return { ...state };
  }
};

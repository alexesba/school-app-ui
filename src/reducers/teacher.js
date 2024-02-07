import {
  GET_TEACHERS_SUCCESS,
  GET_TEACHER_SUCCESS,
  GET_TEACHERS_START,
  GET_TEACHER_START,
  CLEAN_TEACHER_FORM,
} from '../constants/teachers/actions';

export const initialState = {
  teacherList: [],
  isLoading: false,
  teacher: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_TEACHERS_SUCCESS: {
      const { results: teacherList, ...pagination } = action.payload;
      return {
        ...state,
        teacherList,
        ...pagination,
        isLoading: false,
      };
    }
    case GET_TEACHER_SUCCESS: {
      return { ...state, teacher: action.payload, isLoading: false };
    }
    case GET_TEACHERS_START:
    case GET_TEACHER_START:
      return { ...state, isLoading: true };
    case CLEAN_TEACHER_FORM:
      return { ...state, teacher: undefined };
    default:
      return { ...state };
  }
};

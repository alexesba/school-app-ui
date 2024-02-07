import {
  GET_STUDENTS_SUCCESS,
  GET_STUDENT_SUCCESS,
  GET_STUDENTS_START,
  GET_STUDENT_START,
  RESET_STUDENT_FORM,
  CREATE_STUDENT_SUCCESS,
  REMOVE_STUDENT_SUCCESS,
} from '../constants/students/actions';

const distinctUSer = id => user => user.id !== id;

export const initialState = {
  studentList: [],
  isLoading: false,
  student: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_STUDENT_FORM: {
      return { ...state, student: undefined };
    }
    case GET_STUDENTS_SUCCESS: {
      const { results, ...pagination } = action.payload;
      return {
        ...state,
        studentList: action.payload.results,
        ...pagination,
        isLoading: false,
      };
    }
    case GET_STUDENT_SUCCESS: {
      return { ...state, student: action.payload, isLoading: false };
    }
    case CREATE_STUDENT_SUCCESS: {
      return { ...state, student: action.payload, isLoading: false };
    }
    case GET_STUDENTS_START:
    case GET_STUDENT_START:
      return { ...state, isLoading: true };
    case REMOVE_STUDENT_SUCCESS: {
      return {
        ...state,
        studentList: state.studentList.filter(distinctUSer(action.payload.id)),
      };
    }
    default:
      return { ...state };
  }
};

import {
  GET_PROGRAMS_SUCCESS,
  GET_PROGRAM_SUCCESS,
  GET_PROGRAMS_START,
  GET_PROGRAM_START,
  RESET_PROGRAM_FORM,
  CREATE_PROGRAM_SUCCESS,
  REMOVE_PROGRAM_SUCCESS,
} from '../constants/programs/actions';

const distinctProgram = id => program => program.id !== id;

export const initialState = {
  programList: [],
  isLoading: false,
  program: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_PROGRAM_FORM: {
      return { ...state, program: undefined };
    }
    case GET_PROGRAMS_SUCCESS: {
      const { results, ...pagination } = action.payload;
      return {
        ...state,
        programList: action.payload.results,
        ...pagination,
        isLoading: false,
      };
    }
    case GET_PROGRAM_SUCCESS: {
      return { ...state, program: action.payload, isLoading: false };
    }
    case CREATE_PROGRAM_SUCCESS: {
      return { ...state, program: action.payload, isLoading: false };
    }
    case GET_PROGRAMS_START:
    case GET_PROGRAM_START:
      return { ...state, isLoading: true };
    case REMOVE_PROGRAM_SUCCESS: {
      return {
        ...state,
        programList: state.programList.filter(
          distinctProgram(action.payload.id),
        ),
      };
    }
    default:
      return { ...state };
  }
};

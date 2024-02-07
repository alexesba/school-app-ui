import {
  GET_LEVEL_PROGRAMS_SUCCESS,
  GET_LEVEL_PROGRAM_SUCCESS,
  GET_LEVEL_PROGRAMS_START,
  GET_LEVEL_PROGRAM_START,
  RESET_LEVEL_PROGRAM_FORM,
  CREATE_LEVEL_PROGRAM_SUCCESS,
  REMOVE_LEVEL_PROGRAM_SUCCESS,
} from '../constants/level_programs/actions';

const distinctProgram = id => program => program.id !== id;

export const initialState = {
  levelProgramList: [],
  isLoading: false,
  levelProgram: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_LEVEL_PROGRAM_FORM: {
      return { ...state, levelProgram: undefined };
    }
    case GET_LEVEL_PROGRAMS_SUCCESS: {
      const { results, ...pagination } = action.payload;
      return {
        ...state,
        levelProgramList: action.payload.results,
        ...pagination,
        isLoading: false,
      };
    }
    case GET_LEVEL_PROGRAM_SUCCESS: {
      return { ...state, levelProgram: action.payload, isLoading: false };
    }
    case CREATE_LEVEL_PROGRAM_SUCCESS: {
      return { ...state, levelProgram: action.payload, isLoading: false };
    }
    case GET_LEVEL_PROGRAMS_START:
    case GET_LEVEL_PROGRAM_START:
      return { ...state, isLoading: true };
    case REMOVE_LEVEL_PROGRAM_SUCCESS: {
      return {
        ...state,
        levelProgramList: state.levelProgramList.filter(
          distinctProgram(action.payload.id),
        ),
      };
    }
    default:
      return { ...state };
  }
};

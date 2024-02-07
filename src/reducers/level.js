import {
  GET_LEVELS_SUCCESS,
  GET_LEVEL_SUCCESS,
  GET_LEVELS_START,
  GET_LEVEL_START,
  RESET_LEVEL_FORM,
  CREATE_LEVEL_SUCCESS,
  REMOVE_LEVEL_SUCCESS,
} from '../constants/levels/actions';

const distinctLevel = id => level => level.id !== id;

export const initialState = {
  levelList: [],
  isLoading: false,
  level: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET_LEVEL_FORM: {
      return { ...state, level: undefined };
    }
    case GET_LEVELS_SUCCESS: {
      const { results, ...pagination } = action.payload;
      return {
        ...state,
        levelList: action.payload.results,
        ...pagination,
        isLoading: false,
      };
    }
    case GET_LEVEL_SUCCESS: {
      return { ...state, level: action.payload, isLoading: false };
    }
    case CREATE_LEVEL_SUCCESS: {
      return { ...state, level: action.payload, isLoading: false };
    }
    case GET_LEVELS_START:
    case GET_LEVEL_START:
      return { ...state, isLoading: true };
    case REMOVE_LEVEL_SUCCESS: {
      return {
        ...state,
        levelList: state.levelList.filter(
          distinctLevel(action.payload.id),
        ),
      };
    }
    default:
      return { ...state };
  }
};

import {
  GET_ROLES_START,
  GET_ROLES_SUCCESS,
} from '../constants/roles/actions';

export const initialState = {
  roleList: [],
  isLoading: false,
};

export const reducer = (state, action) => {
  switch(action.type) {
    case GET_ROLES_START: {
      return {
        ...state,
        roleList: [],
        isLoading: true,
      };
    }
    case GET_ROLES_SUCCESS: {
      return { ...state, roleList: action.payload, isLoading: false };
    }
    default:
      return { ...state };
  }
};

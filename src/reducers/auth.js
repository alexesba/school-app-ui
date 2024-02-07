import auth from '../auth';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  CHECK_AUTHENTICATION,
} from '../constants/auth/actions';

const isAuthenticated = auth.isAuthenticated();

export const initialState = {
  isAuthenticated,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case CHECK_AUTHENTICATION:
    case LOGOUT_SUCCESS: {
      return { ...state, isAuthenticated: auth.isAuthenticated() };
    }
    default:
      return { ...state };
  }
};

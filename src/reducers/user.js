import { GET_USER_SUCCESS } from '../constants/user/actions';

export const initialState = {
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};

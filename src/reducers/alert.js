import {
  SHOW_ALERT,
  CLOSE_ALERT,
} from '../constants/alerts/actions';

export const initialState = {
  alerType: undefined,
  message: undefined,
  autoClose: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return { ...state, show: true, ...action.payload };
    }

    case CLOSE_ALERT: {
      return {
        ...state, show: false, alerType: undefined, message: undefined,
      };
    }

    default: {
      return { ...state };
    }
  }
};

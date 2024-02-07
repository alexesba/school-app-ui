import * as storage from '../../storage';
// import UserService from '../../services/User';
import { showAlert } from '../alerts/actions';

export const AUTH_TOKEN_NAME = 'lingvo::token';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CHECK_AUTHENTICATION = 'CHECK_AUTHENTICATION';

export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });
export const logoutSuccess = payload => ({ type: LOGOUT_SUCCESS, payload });
export const deleteToken = () => storage.local.removeItem(AUTH_TOKEN_NAME);
export const setToken = token => storage.local.setItem(AUTH_TOKEN_NAME, token);
export const getHeaders = () => JSON.parse(storage.local.getItem(AUTH_TOKEN_NAME));
export const getToken = () => storage.local.getItem(AUTH_TOKEN_NAME);

export const Session = {
  getToken,
  setToken,
  getHeaders,
  deleteToken,
};

export const checkAuthentication = () => ({
  type: CHECK_AUTHENTICATION,
});

export const login = (payload, dispatch = (arg) => { console.log(arg) }) => {
  /* return UserService
    .login(payload).then(response => response.data)
    .then(({ auth_token: authToken }) => {
      setToken(authToken);
      dispatch(loginSuccess(authToken));
      dispatch(showAlert({
        alertType: 'success',
        message: 'Welcome back! :)',
      }));
    })
    .catch(error => {
      console.warn(401, error);
      dispatch(showAlert({
        alertType: 'warning',
        message: error.message,
      }));
      return error;
    }); */
};

export const logout = dispatch => {
  deleteToken();
  return dispatch(logoutSuccess());
};

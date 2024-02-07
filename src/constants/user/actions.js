// import UserService from '../../services/User';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUSerSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUser = (
  payload = {},
  dispatch = () => { },
) => {
  /* return UserService.get(payload)
    .then(response => response.data)
    .then(user => dispatch(getUSerSuccess(user)))
    .catch(error => console.info(error)); */
}

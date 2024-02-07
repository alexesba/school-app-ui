// import RoleService from '../../services/Role';

export const GET_ROLES_START = 'GET_ROLES_START';
export const GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS';

export const getRolesStart = () => ({
  type: GET_ROLES_START,
});

export const getRolesSuccess = payload => ({
  type: GET_ROLES_SUCCESS,
  payload,
});

export const getRoles = (payload = {}, dispatch = () => {}) => {
  dispatch(getRolesStart());
  /* return RoleService.getAll(payload).then(response => response.data)
    .then(roles => dispatch(getRolesSuccess(roles.results)))
    .catch(error => console.error(error)); */
};

export const getRoleByName = (roleList, name) => roleList.find(
  role => role.name === name,
).id;

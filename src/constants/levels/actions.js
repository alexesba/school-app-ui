// import LevelService from '../../services/Level';
import { showAlert } from '../alerts/actions';

export const GET_LEVELS_SUCCESS = 'GET_LEVELS_SUCCESS';
export const GET_LEVELS_START = 'GET_LEVELS_START';
export const GET_LEVEL_SUCCESS = 'GET_LEVEL_SUCCESS';
export const GET_LEVEL_START = 'GET_LEVEL_START';

export const CREATE_LEVEL_START = 'CREATE__LEVEL_START';
export const CREATE_LEVEL_SUCCESS = 'CREATE_LEVEL_SUCCESS';

export const UPDATE_LEVEL_START = 'UPDATE_LEVEL_START';
export const UPDATE_LEVEL_SUCCESS = 'UPDATE_LEVEL_SUCCESS';

export const RESET_LEVEL_FORM = 'RESET_LEVEL_FORM';

export const REMOVE_LEVEL_START = 'REMOVE_LEVEL_START';
export const REMOVE_LEVEL_SUCCESS = 'REMOVE_LEVEL_SUCCESS';

export const getLevelsSuccess = payload => ({
  type: GET_LEVELS_SUCCESS,
  payload,
});

export const getLevelSuccess = payload => ({
  type: GET_LEVEL_SUCCESS,
  payload,
});

const getLevelsStart = () => ({
  type: GET_LEVELS_START,
});


const getLevelStart = () => ({
  type: GET_LEVEL_START,
});

const updateLevelStart = () => ({
  type: UPDATE_LEVEL_START,
});

export const updateLevelSuccess = payload => ({
  type: UPDATE_LEVEL_SUCCESS,
  payload,
});

const createLevelStart = () => ({
  type: CREATE_LEVEL_START,
});

export const createLevelSuccess = payload => ({
  type: CREATE_LEVEL_SUCCESS,
  payload,
});

export const resetLevelForm = () => ({
  type: RESET_LEVEL_FORM,
});

export const getLevels = (payload = {}, dispatch = () => {}) => {
  dispatch(getLevelsStart());
  /* return LevelService.getAll(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(users => dispatch(getLevelsSuccess(users))); */
};

export const getLevel = (payload = {}, dispatch = () => {}) => {
  dispatch(getLevelStart());
  /* return LevelService.getOne(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(user => dispatch(getLevelSuccess(user))); */
};

export const updateLevel = (payload = {}, dispatch = () => {}) => {
  dispatch(updateLevelStart());
  /* return LevelService.update(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(level => {
      dispatch(
        showAlert({
          alertType: 'success',
          message: `The user ${level.name} been updated successfully`,
          autoClose: true,
        }),
      );
      dispatch(updateLevelSuccess(level));
    }); */
};

export const removeLevelStart = () => ({
  type: REMOVE_LEVEL_START,
});

export const removeLevelSuccess = payload => ({
  type: REMOVE_LEVEL_SUCCESS,
  payload,
});

export const deleteLevel = (userId, dispatch = () => {}) => {
  dispatch(removeLevelStart());
  /* return LevelService.destroy(userId).then(response => response.data)
    .then(user => {
      dispatch(removeLevelSuccess(user));
      return user;
    })
    .catch(error => console.warn(error)); */
};

export const createLevel = (payload = {}, dispatch = () => {}) => {
  dispatch(createLevelStart());
  /* return LevelService.create(payload).then(response => response.data)
    .then(level => {
      dispatch(createLevelSuccess(level));
      return level;
    })
    .catch(error => {
      const { response: { data: { errors } } } = error;


      dispatch(
        showAlert({
          alertType: 'warning',
          message: (errors && errors.join(', ')) || error.toString(),
          autoClose: true,
        }),
      );
    }); */
};

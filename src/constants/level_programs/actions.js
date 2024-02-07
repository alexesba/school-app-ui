// import LevelProgramService from '../../services/LevelProgram';
import { showAlert } from '../alerts/actions';

export const GET_LEVEL_PROGRAMS_SUCCESS = 'GET_LEVEL_PROGRAMS_SUCCESS';
export const GET_LEVEL_PROGRAMS_START = 'GET_LEVEL_PROGRAMS_START';
export const GET_LEVEL_PROGRAM_SUCCESS = 'GET_LEVEL_PROGRAM_SUCCESS';
export const GET_LEVEL_PROGRAM_START = 'GET_LEVEL_PROGRAM_START';

export const CREATE_LEVEL_PROGRAM_START = 'CREATE__LEVEL_PROGRAM_START';
export const CREATE_LEVEL_PROGRAM_SUCCESS = 'CREATE_LEVEL_PROGRAM_SUCCESS';

export const UPDATE_LEVEL_PROGRAM_START = 'UPDATE_LEVEL_PROGRAM_START';
export const UPDATE_LEVEL_PROGRAM_SUCCESS = 'UPDATE_LEVEL_PROGRAM_SUCCESS';

export const RESET_LEVEL_PROGRAM_FORM = 'RESET_LEVEL_PROGRAM_FORM';

export const REMOVE_LEVEL_PROGRAM_START = 'REMOVE_LEVEL_PROGRAM_START';
export const REMOVE_LEVEL_PROGRAM_SUCCESS = 'REMOVE_LEVEL_PROGRAM_SUCCESS';

export const getLevelProgramsSuccess = payload => ({
  type: GET_LEVEL_PROGRAMS_SUCCESS,
  payload,
});

export const getLevelProgramSuccess = payload => ({
  type: GET_LEVEL_PROGRAM_SUCCESS,
  payload,
});

const getLevelProgramsStart = () => ({
  type: GET_LEVEL_PROGRAMS_START,
});


const getLevelProgramStart = () => ({
  type: GET_LEVEL_PROGRAM_START,
});

const updateLevelProgramStart = () => ({
  type: UPDATE_LEVEL_PROGRAM_START,
});

export const updateLevelProgramSuccess = payload => ({
  type: UPDATE_LEVEL_PROGRAM_SUCCESS,
  payload,
});

const createLevelProgramStart = () => ({
  type: CREATE_LEVEL_PROGRAM_START,
});

export const createLevelProgramSuccess = payload => ({
  type: CREATE_LEVEL_PROGRAM_SUCCESS,
  payload,
});

export const resetLevelProgramForm = () => ({
  type: RESET_LEVEL_PROGRAM_FORM,
});

export const getLevelPrograms = (payload = {}, dispatch = () => {}) => {
  dispatch(getLevelProgramsStart());
  /* return LevelProgramService.getAll(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(users => dispatch(getLevelProgramsSuccess(users))); */
};

export const getLevelProgram = (payload = {}, dispatch = () => {}) => {
  dispatch(getLevelProgramStart());
  /* return LevelProgramService.getOne(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(user => dispatch(getLevelProgramSuccess(user))); */
};

export const updateLevelProgram = (payload = {}, dispatch = () => {}) => {
  dispatch(updateLevelProgramStart());
  /* return LevelProgramService.update(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(program => {
      dispatch(
        showAlert({
          alertType: 'success',
          message: `The user ${program.name} been updated successfully`,
          autoClose: true,
        }),
      );
      dispatch(updateLevelProgramSuccess(program));
    }); */
};

export const removeLevelProgramStart = () => ({
  type: REMOVE_LEVEL_PROGRAM_START,
});

export const removeLevelProgramSuccess = payload => ({
  type: REMOVE_LEVEL_PROGRAM_SUCCESS,
  payload,
});

export const deleteLevelProgram = (userId, dispatch = () => {}) => {
  dispatch(removeLevelProgramStart());
  /* return LevelProgramService.destroy(userId).then(response => response.data)
    .then(user => {
      dispatch(removeLevelProgramSuccess(user));
      return user;
    })
    .catch(error => console.warn(error)); */
};

export const createLevelProgram = (payload = {}, dispatch = () => {}) => {
  dispatch(createLevelProgramStart());
  /* return LevelProgramService.create(payload).then(response => response.data)
    .then(program => {
      dispatch(createLevelProgramSuccess(program));
      return program;
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

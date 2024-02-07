// import ProgramService from '../../services/Program';
import { showAlert } from '../alerts/actions';

export const GET_PROGRAMS_SUCCESS = 'GET_PROGRAMS_SUCCESS';
export const GET_PROGRAMS_START = 'GET_PROGRAMS_START';
export const GET_PROGRAM_SUCCESS = 'GET_PROGRAM_SUCCESS';
export const GET_PROGRAM_START = 'GET_PROGRAM_START';

export const CREATE_PROGRAM_START = 'CREATE__PROGRAM_START';
export const CREATE_PROGRAM_SUCCESS = 'CREATE_PROGRAM_SUCCESS';

export const UPDATE_PROGRAM_START = 'UPDATE_PROGRAM_START';
export const UPDATE_PROGRAM_SUCCESS = 'UPDATE_PROGRAM_SUCCESS';

export const RESET_PROGRAM_FORM = 'RESET_PROGRAM_FORM';

export const REMOVE_PROGRAM_START = 'REMOVE_PROGRAM_START';
export const REMOVE_PROGRAM_SUCCESS = 'REMOVE_PROGRAM_SUCCESS';

export const getProgramsSuccess = payload => ({
  type: GET_PROGRAMS_SUCCESS,
  payload,
});

export const getProgramSuccess = payload => ({
  type: GET_PROGRAM_SUCCESS,
  payload,
});

const getProgramsStart = () => ({
  type: GET_PROGRAMS_START,
});


const getProgramStart = () => ({
  type: GET_PROGRAM_START,
});

const updateProgramStart = () => ({
  type: UPDATE_PROGRAM_START,
});

export const updateProgramSuccess = payload => ({
  type: UPDATE_PROGRAM_SUCCESS,
  payload,
});

const createProgramStart = () => ({
  type: CREATE_PROGRAM_START,
});

export const createProgramSuccess = payload => ({
  type: CREATE_PROGRAM_SUCCESS,
  payload,
});

export const resetProgramForm = () => ({
  type: RESET_PROGRAM_FORM,
});

export const getPrograms = (payload = {}, dispatch = () => {}) => {
  dispatch(getProgramsStart());
  /* return ProgramService.getAll(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(users => dispatch(getProgramsSuccess(users))); */
};

export const getProgram = (payload = {}, dispatch = () => {}) => {
  dispatch(getProgramStart());
  /* return ProgramService.getOne(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(user => dispatch(getProgramSuccess(user))); */
};

export const updateProgram = (payload = {}, dispatch = () => {}) => {
  dispatch(updateProgramStart());
  /* return ProgramService.update(payload).then(response => response.data)
    .catch(error => console.error(error))
    .then(program => {
      dispatch(
        showAlert({
          alertType: 'success',
          message: `The user ${program.name} been updated successfully`,
          autoClose: true,
        }),
      );
      dispatch(updateProgramSuccess(program));
    }); */
};

export const removeProgramStart = () => ({
  type: REMOVE_PROGRAM_START,
});

export const removeProgramSuccess = payload => ({
  type: REMOVE_PROGRAM_SUCCESS,
  payload,
});

export const deleteProgram = (userId, dispatch = () => {}) => {
  dispatch(removeProgramStart());
  /* return ProgramService.destroy(userId).then(response => response.data)
    .then(user => {
      dispatch(removeProgramSuccess(user));
      return user;
    })
    .catch(error => console.warn(error)); */
};

export const createProgram = (payload = {}, dispatch = () => {}) => {
  dispatch(createProgramStart());
  /* return ProgramService.create(payload).then(response => response.data)
    .then(program => {
      dispatch(createProgramSuccess(program));
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

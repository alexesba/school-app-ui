import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import urlHelper from '../../utils/url';
import * as levelProgramPaths from '../../constants/level_programs/paths';
import { getPrograms } from '../../constants/programs/actions';
import {
  createLevelProgram,
  getLevelPrograms,
} from '../../constants/level_programs/actions';
import { getLevels } from '../../constants/levels/actions';
import { useStateProvider } from '../../store';

const AddProgram = ({ history }) => {
  const appState = useStateProvider();

  const {
    dispatch,
    state: {
      currentUser,
      program: { programList },
      level: { levelList },
    },
  } = appState;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const goToUrl = urlHelper(levelProgramPaths, history);

  useEffect(() => {
    $('.select2').select2({
      width: '100%',
    });
    getPrograms({}, dispatch);
    getLevels({}, dispatch);
  }, []);

  const onSubmit = values => createLevelProgram(values, dispatch).then(
    levelProgram => {
      if (levelProgram && levelProgram.id) {
        getLevelPrograms({}, dispatch);
        goToUrl('index');
      }
    },
  );

  return (

    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3> Add New Program </h3>
          </div>
          <ThreeDotsDropDownMenu>
            <button
              onClick={() => goToUrl('back')}
              className="dropdown-item"
              type="button"
            >
              <i className="fas fa-angle-left text-blue" />
              Cancel
            </button>
          </ThreeDotsDropDownMenu>
        </div>

        <form className="new-added-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <input
              name="id"
              type="hidden"
              {...register('id')}
            />

            <input
              name="user_id"
              type="hidden"
              defaultValue={currentUser.id}
              {...register('user_id')}
            />

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="program_id">Program *</label>
              <select
                className={classNames('select2', {
                  'is-valid': !errors.program_id,
                  'is-invalid': errors.program_id,
                })}
                name="program_id"
                {...register('program_id', { required: true })}
              >
                <option value="">Please Select a Program*</option>
                { programList.map(program => (
                  <option value={program.id}>{program.name}</option>
                )) }
              </select>
              { errors.program_id && (
              <span className="text-danger">
                This Field is Required
              </span>
              ) }
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="level_id">Level *</label>
              <select
                className={classNames('select2', {
                  'is-valid': !errors.level_id,
                  'is-invalid': errors.level_id,
                })}
                name="level_id"
                {...register('level_id', { required: true })}
              >
                <option value="">Please Select a Program*</option>
                { levelList.map(level => (
                  <option value={level.id}>{level.name}</option>
                )) }
              </select>
              { errors.level_id && (
              <span className="text-danger">
                This Field is Required
              </span>
              ) }
            </div>

            <div className="col-12 form-group mg-t-8">
              <button
                type="submit"
                className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
              >
                Save
              </button>
              <button
                type="button"
                className="btn-fill-lg bg-blue-dark btn-hover-yellow"
                onClick={() => reset()}
              >
                Reset
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

AddProgram.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

export default React.memo(AddProgram);

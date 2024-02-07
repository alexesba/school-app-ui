import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import urlHelper from '../../utils/url';
import * as coursesPaths from '../../constants/courses/paths';
import { createCourse, getCourses } from '../../constants/courses/actions';
import { useStateProvider } from '../../store';

const AddCourse = ({ history }) => {
  const appState = useStateProvider();

  const {
    dispatch,
    state: {
      currentUser,
    },
  } = appState;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const goToUrl = urlHelper(coursesPaths, history);

  const onSubmit = values => createCourse(values, dispatch).then(course => {
    if (course && course.id) {
      getCourses({}, dispatch);
      goToUrl('index');
    }
  });

  return (

    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3> Add New Course </h3>
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
              <label htmlFor="name">
                Course Name *
              </label>
              <input
                name="name"
                type="text"
                placeholder="Course Name"
                className={classNames('form-control', {
                  'is-valid': !errors.name,
                  'is-invalid': errors.name,
                })}
                {...register('name', { required: true })}
              />
              { errors.name
              && <span className="text-danger">This Field is Required </span> }
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

AddCourse.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

export default React.memo(AddCourse);

// cSpell: disable
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';

const createClasRoutine = () => new Promise();

const ClassRoutine = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => createClasRoutine(data).then(classRoutine => {
    history.push(`/app/students/${classRoutine.id}/edit`);
  });

  return (

    <div className="row">
      <div className="col-4-xxxl col-12">
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add class routine</h3>
              </div>

              <ThreeDotsDropDownMenu>
                <button
                  onClick={() => history.goBack()}
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

                <div className="col-12-xxxl col-lg-6 col-12 form-group">
                  <label htmlFor="first_name">
                    First Name *
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    className={classNames('form-control', {
                      'is-valid': !errors.first_name,
                      'is-invalid': errors.first_name,
                    })}
                    {...register('first_name', { required: true })}
                  />
                  { errors.first_name
                    && (
                      <span className="text-danger">
                        This Field is Required
                      </span>
                    )}
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

      <div className="col-8-xxxl col-12">
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Class Routine</h3>
              </div>
              <ThreeDotsDropDownMenu>
                <button
                  onClick={() => history.goBack()}
                  className="dropdown-item"
                  type="button"
                >
                  <i className="fas fa-angle-left text-blue" />
                 Cancel
                </button>
              </ThreeDotsDropDownMenu>
            </div>
            <form className="mg-b-20">
              <div className="row gutters-8">
                <div className="col-lg-4 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Day ..."
                    className="form-control"
                  />
                </div>

                <div className="col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Class ..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-3 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Section ..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-2 col-12 form-group">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>

            <div className="table-responsive">
              <table className="table display data-table text-nowrap">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input checkAll"
                        />
                        <label className="form-check-label">Day</label>
                      </div>
                    </th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Section</th>
                    <th>Teacher</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ClassRoutine.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

export default ClassRoutine;

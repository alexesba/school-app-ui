import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useStateProvider } from '../../store';
import datePickerData from '../../utils/datePickerData';

import { createStudent } from '../../constants/students/actions';
import { getRoles, getRoleByName } from '../../constants/roles/actions';

import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import * as studentsPaths from '../../constants/students/paths';
import urlHelper from '../../utils/url';

const EditStudent = props => {
  const { history } = props;

  const goToUrl = urlHelper(studentsPaths, history);

  const appState = useStateProvider();
  const {
    dispatch, state: {
      currentUser,
      role: { roleList },
    },
  } = appState;

  const initializeElements = () => {
    $('.air-datepicker').datepicker(datePickerData);
  };

  useEffect(() => {
    $('.select2').select2({
      width: '100%',
    });
  }, [roleList]);

  useEffect(() => {
    getRoles({}, dispatch).then(initializeElements);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => createStudent(data).then(student => {
    goToUrl('edit', student.id);
  });

  return (
    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3> Add New Student </h3>
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
              name="organization_id"
              type="hidden"
              defaultValue={1}
              {...register('organization_id')}
            />

            <div className="col-xl-3 col-lg-6 col-12 form-group">
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
              {errors.first_name
                && <span className="text-danger">This Field is Required </span>}
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="first_name">
                Middle Name *
              </label>
              <input
                name="first_name"
                type="text"
                placeholder="Middle Name"
                className={classNames('form-control', {
                  'is-valid': !errors.middle_name,
                  'is-invalid': errors.middle_name,
                })}
                {...register('first_name', { required: true })}
              />
              {errors.middle_name
                && <span className="text-danger">This Field is Required </span>}
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="last_name">Last Name *</label>
              <input
                name="last_name"
                type="text"
                placeholder=""
                className={classNames('form-control', {
                  'is-valid': !errors.last_name,
                  'is-invalid': errors.last_name,
                })}
                {...register('last_name', { required: true })}
              />

              {errors.last_name
                && <span className="text-danger">This Field is Required </span>}

            </div>
            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                className={classNames('select2', {
                  'is-valid': !errors.gender,
                  'is-invalid': errors.gender,
                })}
                name="gender"
                {...register('gender', { required: true })}
              >
                <option value="">Please Select Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              {errors.gender
                && <span className="text-danger">This Field is Required </span>}
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="date_of_birth">Date Of Birth *</label>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className={classNames('form-control air-datepicker', {
                  'is-valid': !errors.date_of_birth,
                  'is-invalid': errors.date_of_birth,
                })}
                data-position="bottom right"
                name="date_of_birth"
                {...register('date_of_birth', { required: true })}
              />
              { errors.date_of_birth && (
              <span className="text-danger">
                This Field is Required
              </span>
              ) }
              <i className="far fa-calendar-alt" />
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="role">Role</label>
              { roleList.length

              && (
              <select
                className={classNames('select2', {
                  'is-valid': !errors.role_ids,
                  'is-invalid': errors.role_ids,
                })}
                name="role_ids[0]"
                disabled={currentUser.role !== 'admin'}
                defaultValue={getRoleByName(roleList, 'student')}
                {...register('role_ids[0]', { required: true })}
              >

                <option value="">Please Select Gender *</option>
                { roleList.map(role => (
                  <option value={role.id} key={role.id}>
                    {role.name}
                  </option>
                )) }
              </select>
              )}
              { errors.role_ids && (
              <span className="text-danger">
                This Field is Required
              </span>
              ) }
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="marital_status">Marital Status *</label>
              <select
                className={classNames('select2', {
                  'is-valid': !errors.marital_status,
                  'is-invalid': errors.marital_status,
                })}
                name="marital_status"
                {...register('marital_status', { required: true })}
              >
                <option value="">Please Select Group *</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="windowed">Windowed</option>
                <option value="divorced">Divorced</option>
                <option value="separated">Separated</option>
              </select>
              { errors.marital_status && (
              <span className="text-danger">
                This Field is Required
              </span>
              ) }
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="blood_type">Blood Group *</label>
              <select
                className={classNames('select2', {
                  'is-valid': !errors.blood_type,
                  'is-invalid': errors.blood_type,
                })}
                name="blood_type"
                {...register('blood_type', { required: true })}
              >
                <option value="">Please Select Group *</option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
              </select>
              { errors.blood_type && (
              <span className="text-danger">
                This Field is Required
              </span>
              ) }
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder=""
                className={classNames('form-control', {
                  'is-valid': !errors.blood_type,
                  'is-invalid': errors.blood_type,
                })}
                {...register('email', { required: true })}
              />
              {errors.email
                && <span className="text-danger">This Field is Required </span>}
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="no_control">Control Number</label>
              <input
                type="text"
                placeholder=""
                name="no_control"
                className={classNames('form-control', {
                  'is-valid': !errors.no_control,
                  'is-invalid': errors.no_control,
                })}
                {...register('no_control', { required: true })}
              />
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="curp">CURP</label>
              <input
                type="text"
                placeholder=""
                name="curp"
                className={classNames('form-control', {
                  'is-valid': !errors.curp,
                  'is-invalid': errors.curp,
                })}
                {...register('curp', { required: true })}
              />

              { errors.curp
                && <span className="text-danger">This Field is Required </span>}
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="home_phone">Home Phone</label>
              <input
                type="text"
                placeholder=""
                name="home_phone"
                className={classNames('form-control', {
                  'is-valid': !errors.home_phone,
                  'is-invalid': errors.home_phone,
                })}
                {...register('home_phone', { required: true })}
              />
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="mobile_phone">Mobile Phone</label>
              <input
                type="text"
                placeholder=""
                name="mobile_phone"
                className={classNames('form-control', {
                  'is-valid': !errors.mobile_phone,
                  'is-invalid': errors.mobile_phone,
                })}
                {...register('mobile_phone', { required: true })}

              />
            </div>

            <div className="col-lg-6 col-12 form-group">
              <label htmlFor="message">Short BIO</label>
              <textarea
                className="textarea form-control"
                name="message"
                id="form-message"
                cols="10"
                rows="9"
              />
            </div>

            <div className="col-lg-6 col-12 form-group mg-t-30">
              <label
                htmlFor="filename"
                className="text-dark-medium"
              >
                Upload Student Photo (150px X 150px)
              </label>
              <input
                name="filename"
                type="file"
                className="form-control-file"
              />
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

EditStudent.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default EditStudent;

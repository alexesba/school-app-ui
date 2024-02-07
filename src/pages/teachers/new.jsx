import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import moment from 'moment';
import { useStateProvider } from '../../store';
import {
  createTeacher,
  cleanTeacherForm,
} from '../../constants/teachers/actions';
import datePickerData from '../../utils/datePickerData';
import { getRoles, getRoleByName } from '../../constants/roles/actions';

const AddTeacher = ({ history }) => {
  const appState = useStateProvider();
  const {
    dispatch, state: {
      currentUser,
      teacher: { teacher, isLoading },
      role: { roleList },
    },
  } = appState;

  const dFormat = 'MM/DD/YYYY';

  const initializeElements = () => {
    $('.air-datepicker').datepicker(datePickerData);
  };

  useEffect(() => {
    $('.select2').select2({
      width: '100%',
    });
  }, [teacher, roleList]);

  useEffect(() => {
    getRoles({}, dispatch).then(initializeElements);

    return () => dispatch(cleanTeacherForm());
  }, []);

  const dateFormat = dateString => moment(dateString).format(dFormat);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const { id } = await createTeacher(data, dispatch);
    history.push(`/app/teachers/${id}/edit`);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3>
              { teacher && teacher.id ? 'Update ' : 'Add New '}
              Teacher
            </h3>
          </div>
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="!#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              ...
            </a>

            <div className="dropdown-menu dropdown-menu-right">
              <Link to="/app/teachers" className="dropdown-item">
                <i className="fas fa-times text-orange-red" />
                Close
              </Link>
              <a className="dropdown-item" href="#!">
                <i className="fas fa-cogs text-dark-pastel-green" />
                Edit
              </a>
              <a className="dropdown-item" href="#!">
                <i className="fas fa-redo-alt text-orange-peel" />
                Refresh
              </a>
            </div>
          </div>
        </div>

        <form className="new-added-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">

            <input
              name="id"
              type="hidden"
              defaultValue={(teacher && teacher.id) || undefined}
              {...register('id')}
            />

            <input
              name="organization_id"
              type="hidden"
              defaultValue={currentUser.organization_id}
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
                defaultValue={(teacher && teacher.first_name) || undefined}
                {...register('first_name', { required: true })}
              />
              { errors.first_name && <span className="text-danger">This Field is Required </span> }
            </div>

            {/* <div className="col-xl-3 col-lg-6 col-12 form-group"> */}
            {/*   <label htmlFor="first_name"> */}
            {/*     Middle Name * */}
            {/*   </label> */}
            {/*   <input */}
            {/*     name="middle_name" */}
            {/*     type="text" */}
            {/*     placeholder="Middle Name" */}
            {/*     className={classNames('form-control', { */}
            {/*       'is-valid': !errors.middle_name, */}
            {/*       'is-invalid': errors.middle_name, */}
            {/*     })} */}
            {/*     defaultValue={(teacher && teacher.middle_name) || undefined} */}
            {/*     {...register('middle_name', { required: true })} */}
            {/*   /> */}
            {/*   { errors.middle_name && <span className="text-danger">This Field is Required </span> } */}
            {/* </div> */}

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label>Last Name *</label>
              <input
                name="last_name"
                type="text"
                placeholder=""
                className={classNames('form-control', {
                  'is-valid': !errors.last_name,
                  'is-invalid': errors.last_name,
                })}
                defaultValue={(teacher && teacher.last_name) || undefined}
                {...register('last_name', { required: true })}
              />

              { errors.last_name && <span className="text-danger">This Field is Required </span> }

            </div>
            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                className={classNames('select2', {
                  'is-valid': !errors.gender,
                  'is-invalid': errors.gender,
                })}
                name="gender"
                defaultValue={(teacher && teacher.gender) || undefined}
                {...register('gender', { required: true })}
              >
                <option value="">Please Select Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              { errors.gender && <span className="text-danger">This Field is Required </span> }
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
                defaultValue={
                (teacher && dateFormat(teacher.date_of_birth)) || undefined
                }
                {...register('date_of_birth', { required: true })}
              />
              { errors.date_of_birth
              && <span className="text-danger">This Field is Required </span> }
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
                defaultValue={getRoleByName(roleList, 'teacher')}
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
              { errors.role_ids &&
              <span className="text-danger">This Field is Required </span> }
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label htmlFor="id_no">ID No</label>
              <input
                name="id_no"
                type="text"
                placeholder=""
                className="form-control"
                {...register('id_no', { required: true })}
              />
              { errors.id_no && (
              <span
                className="text-danger"
              >
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
                defaultValue={(teacher && teacher.blood_type) || undefined}
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
              <span
                className="text-danger"
              >
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
                  'is-valid': !errors.email,
                  'is-invalid': errors.email,
                })}
                defaultValue={(teacher && teacher.email) || undefined}
                {...register('email', { required: true })}
              />
              { errors.email && (
              <span
                className="text-danger"
              >
                This Field is Required
              </span>
              ) }
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
                defaultValue={(teacher && teacher.home_phone) || undefined}
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
                defaultValue={(teacher && teacher.mobile_phone) || undefined}
                {...register('mobile_phone', { required: true })}

              />
            </div>

            <div className="col-lg-6 col-12 form-group">
              <label htmlFor="form-message">Short BIO</label>
              <textarea
                className="textarea form-control"
                name="message"
                id="form-message"
                cols="10"
                rows="9"
              />
            </div>

            <div className="col-lg-6 col-12 form-group mg-t-30">
              <label className="text-dark-medium" htmlFor="file">
                Upload Teacher Photo (150px X 150px)
              </label>
              <input type="file" className="form-control-file" name="file" />
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
                onClick={reset}
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

AddTeacher.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};
export default AddTeacher;

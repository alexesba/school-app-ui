import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import moment from 'moment';
import { useStateProvider } from '../../store';
import datePickerData from '../../utils/datePickerData';

import { getTeacher, updateTeacher, cleanTeacherForm } from '../../constants/teachers/actions';
import { getRoles } from '../../constants/roles/actions';

const EditStudent = props => {
  const { match: { params } } = props;

  const appState = useStateProvider();
  const {
    dispatch,
    state: {
      teacher: { teacher, isLoading },
      role: { roleList },
    },
  } = appState;

  const dFormat = 'MM/DD/YYYY';

  const initializeElements = () => {
    $('.air-datepicker').datepicker(
      datePickerData,
    );
  };

  useEffect(() => {
    $('.select2').select2({
      width: '100%',
    });
  }, [teacher, roleList]);

  useEffect(() => {
    if (params.id) {
      getTeacher(params, dispatch);
    }
    getRoles({}, dispatch).then(initializeElements);

    return () => dispatch(cleanTeacherForm());
  }, [params.id]);

  const dateFormat = dateString => moment(dateString).format(dFormat);

  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  const onSubmit = data => updateTeacher(data, dispatch);

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
              href="#"
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
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs text-dark-pastel-green" />
                Edit
              </a>
              <a className="dropdown-item" href="#">
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
              ref={register()}
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
                ref={register({ required: true })}
              />
              { errors.first_name && <span className="text-danger">This Field is Required </span> }
            </div>

            {/* <div className="col-xl-3 col-lg-6 col-12 form-group"> */}
            {/*   <label htmlFor="first_name"> */}
            {/*     Middle Name * */}
            {/*   </label> */}
            {/*   <input */}
            {/*     name="first_name" */}
            {/*     type="text" */}
            {/*     placeholder="Middle Name" */}
            {/*     className={classNames('form-control', { */}
            {/*       'is-valid': !errors.middle_name, */}
            {/*       'is-invalid': errors.middle_name, */}
            {/*     })} */}
            {/*     defaultValue={(teacher && teacher.middle_name) || undefined} */}
            {/*     ref={register({ required: true })} */}
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
                ref={register({ required: true })}
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
                ref={register({ required: true })}
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
                defaultValue={(teacher && dateFormat(teacher.date_of_birth)) || undefined}
                ref={register({ required: true })}
              />
              { errors.date_of_birth && <span className="text-danger">This Field is Required </span> }
              <i className="far fa-calendar-alt" />
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label>ID No</label>
              <input
                name="id_no"
                type="text"
                placeholder=""
                className="form-control"
                ref={register({ required: true })}
              />
              { errors.id_no && <span className="text-danger">This Field is Required </span> }
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
                ref={register({ required: true })}
              >
                <option value="">Please Select Group *</option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
              </select>
              { errors.blood_type && <span className="text-danger">This Field is Required </span> }
            </div>

            {/* <div className="col-xl-3 col-lg-6 col-12 form-group"> */}
            {/*   <label htmlFor="role">Role</label> */}
            {/*   { roleList.length */}
            {/*  */}
            {/*   && ( */}
            {/*   <select */}
            {/*     className={classNames('select2', { */}
            {/*       'is-valid': !errors.role_ids, */}
            {/*       'is-invalid': errors.role_ids, */}
            {/*     })} */}
            {/*     name="role_ids[0]" */}
            {/*     readOnly */}
            {/*     defaultValue={(teacher && `${teacher.role_id}`) || undefined} */}
            {/*     ref={register({ required: true })} */}
            {/*   > */}
            {/*  */}
            {/*     <option value="">Please Select Gender *</option> */}
            {/*     { roleList.map(role => ( */}
            {/*       <option value={role.id} key={role.id}> */}
            {/*         {role.name} */}
            {/*       </option> */}
            {/*     )) } */}
            {/*   </select> */}
            {/*   )} */}
            {/*   { errors.role_ids && <span className="text-danger">This Field is Required </span> } */}
            {/* </div> */}

            {/* <div className="col-xl-3 col-lg-6 col-12 form-group"> */}
            {/*   <label htmlFor="marital_status">Marital Status *</label> */}
            {/*   <select */}
            {/*     className={classNames('select2', { */}
            {/*       'is-valid': !errors.marital_status, */}
            {/*       'is-invalid': errors.marital_status, */}
            {/*     })} */}
            {/*     name="marital_status" */}
            {/*     defaultValue={(teacher && teacher.marital_status) || undefined} */}
            {/*     ref={register({ required: true })} */}
            {/*   > */}
            {/*     <option value="">Please Select Group *</option> */}
            {/*     <option value="single">Single</option> */}
            {/*     <option value="married">Married</option> */}
            {/*     <option value="windowed">Windowed</option> */}
            {/*     <option value="divorced">Divorced</option> */}
            {/*     <option value="separated">Separated</option> */}
            {/*   </select> */}
            {/*   { errors.marital_status && <span className="text-danger">This Field is Required </span> } */}
            {/* </div> */}


            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label>E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder=""
                className={classNames('form-control', {
                  'is-valid': !errors.email,
                  'is-invalid': errors.email,
                })}
                defaultValue={(teacher && teacher.email) || undefined}
                ref={register({ required: true })}
              />
              { errors.email && <span className="text-danger">This Field is Required </span> }
            </div>


            {/* <div className="col-xl-3 col-lg-6 col-12 form-group"> */}
            {/*   <label>Control Number</label> */}
            {/*   <input */}
            {/*     type="text" */}
            {/*     placeholder="" */}
            {/*     name="no_control" */}
            {/*     className={classNames('form-control', { */}
            {/*       'is-valid': !errors.no_control, */}
            {/*       'is-invalid': errors.no_control, */}
            {/*     })} */}
            {/*     defaultValue={(teacher && teacher.no_control) || undefined} */}
            {/*     ref={register({ required: true })} */}
            {/*   /> */}
            {/* </div> */}

            {/* <div className="col-xl-3 col-lg-6 col-12 form-group"> */}
            {/*   <label>CURP</label> */}
            {/*   <input */}
            {/*     type="text" */}
            {/*     placeholder="" */}
            {/*     name="curp" */}
            {/*     className={classNames('form-control', { */}
            {/*       'is-valid': !errors.curp, */}
            {/*       'is-invalid': errors.curp, */}
            {/*     })} */}
            {/*     defaultValue={(teacher && teacher.curp) || undefined} */}
            {/*     ref={register({ required: true })} */}
            {/*   /> */}
            {/*  */}
            {/*   { errors.curp && <span className="text-danger">This Field is Required </span> } */}
            {/* </div> */}

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label>Home Phone</label>
              <input
                type="text"
                placeholder=""
                name="home_phone"
                className={classNames('form-control', {
                  'is-valid': !errors.home_phone,
                  'is-invalid': errors.home_phone,
                })}
                defaultValue={(teacher && teacher.home_phone) || undefined}
                ref={register({ required: true })}
              />
            </div>

            <div className="col-xl-3 col-lg-6 col-12 form-group">
              <label>Mobile Phone</label>
              <input
                type="text"
                placeholder=""
                name="mobile_phone"
                className={classNames('form-control', {
                  'is-valid': !errors.mobile_phone,
                  'is-invalid': errors.mobile_phone,
                })}
                defaultValue={(teacher && teacher.mobile_phone) || undefined}
                ref={register({ required: true })}

              />
            </div>

            <div className="col-lg-6 col-12 form-group">
              <label>Short BIO</label>
              <textarea className="textarea form-control" name="message" id="form-message" cols="10" rows="9" />
            </div>

            <div className="col-lg-6 col-12 form-group mg-t-30">
              <label className="text-dark-medium">Upload Teacher Photo (150px X 150px)</label>
              <input type="file" className="form-control-file" />
            </div>

            <div className="col-12 form-group mg-t-8">
              <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
              <button
                type="reset"
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }),
};
export default EditStudent;

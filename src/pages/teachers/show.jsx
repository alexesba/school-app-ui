import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import studenImage1 from 'images/figure/student1.jpg';
import { useStateProvider } from '../../store';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import datePickerData from '../../utils/datePickerData';
import urlHelper from '../../utils/url';
import * as teacherPaths from '../../constants/teachers/paths';

import {
  getTeacher,
} from '../../constants/teachers/actions';
import { getRoles } from '../../constants/roles/actions';

const EditStudent = props => {
  const { match: { params }, history } = props;

  const goToUrl = urlHelper(teacherPaths, history);

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
    getTeacher(params, dispatch);
    getRoles({}, dispatch).then(initializeElements);
  }, [params.id]);

  const dateFormat = dateString => moment(dateString).format(dFormat);
  const refreshData = user => getTeacher(user, dispatch);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3>
              About Teacher
            </h3>
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
            <button
              onClick={() => console.warn('delete', params.id)}
              className="dropdown-item"
              type="button"
            >
              <i className="fas fa-times text-orange-red" />
              Delete
            </button>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => refreshData(teacher)}
            >
              <i className="fas fa-redo-alt text-orange-peel" type="button" />
              Refresh
            </button>
          </ThreeDotsDropDownMenu>
        </div>

        <div className="single-info-details">
          <div className="item-img">
            <img src={studenImage1} alt="student" />
          </div>
          <div className="item-content">
            <div className="header-inline item-header">
              <h3 className="text-dark-medium font-medium">
                {teacher && teacher.name }
              </h3>
              <div className="header-elements">
                <ul>
                  <li>
                    <a href="#!" onClick={() => goToUrl('edit', teacher.id)}>
                      <i className="far fa-edit" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fas fa-print" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fas fa-download" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              {teacher && teacher.biography}
            </p>
            <div className="info-table table-responsive">
              <table className="table text-nowrap">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.name}
                    </td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.gender}
                    </td>
                  </tr>
                  <tr>
                    <td>Father Name:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.father_name}
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Name:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.mother_name}
                    </td>
                  </tr>
                  <tr>
                    <td>Date Of Birth:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && dateFormat(teacher.date_of_birth)}
                    </td>
                  </tr>
                  <tr>
                    <td>Religion:</td>
                    <td className="font-medium text-dark-medium">Islam</td>
                  </tr>
                  <tr>
                    <td>Father Occupation:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.father_occupation}
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Occupation:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.mother_occupation}
                    </td>
                  </tr>
                  <tr>
                    <td>E-mail:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.email}
                    </td>
                  </tr>
                  <tr>
                    <td>Admission Date:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && dateFormat(teacher.created_at)}
                    </td>
                  </tr>
                  <tr>
                    <td>Class:</td>
                    <td className="font-medium text-dark-medium">2</td>
                  </tr>
                  <tr>
                    <td>Section:</td>
                    <td className="font-medium text-dark-medium">Pink</td>
                  </tr>
                  <tr>
                    <td>No Control:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.no_control}
                    </td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td className="font-medium text-dark-medium">
                      House #10, Road #6, Australia
                    </td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td className="font-medium text-dark-medium">
                      {teacher && teacher.home_phone}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditStudent.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default EditStudent;

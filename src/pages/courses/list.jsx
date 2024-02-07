import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCourses, deleteCourse } from '../../constants/courses/actions';
import { useStateProvider } from '../../store';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import ModalConfirmation from '../../components/modals/confirmation';
import { showAlert } from '../../constants/alerts/actions';
import urlHelper from '../../utils/url';
import * as coursePaths from '../../constants/courses/paths';

import Paginate from '../../components/Paginate';

const CourseList = ({ history }) => {
  const appState = useStateProvider();
  const {
    dispatch, state: {
      course: {
        courseList, ...pagination
      },
    },
  } = appState;

  const goToUrl = urlHelper(coursePaths, history);

  const onPageChange = params => getCourses(params, dispatch);

  useEffect(() => {
    if (courseList.length === 0) {
      getCourses({}, dispatch);
    }
  }, [courseList.length]);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const [confirmationData, setConfirmationData] = useState({
    show: false,
    message: undefined,
    course: undefined,
  });

  const showConfirmationModal = course => setConfirmationData({
    show: true,
    message: `
    You are about to delete the course permanently, do you want to continue?
    `,
    course,
  });

  const showDeletingInProgressModal = () => setConfirmationData({
    ...confirmationData,
    loading: true,
  });

  const onCancelDelete = () => setConfirmationData({
    show: false,
    message: undefined,
  });

  const onAcceptDelete = course => () => {
    showDeletingInProgressModal();
    deleteCourse(course.id, dispatch).then(() => {
      setConfirmationData({ show: false, message: undefined });
      dispatch(showAlert({
        alertType: 'success',
        message: 'The user has been deleted successfully',
      }));
    });
  };

  const addToSelect = id => setSelectedCourses([...selectedCourses, id]);
  const removeItem = id => setSelectedCourses(
    selectedCourses.filter(selectedId => selectedId !== id),
  );

  const selectAll = () => setSelectedCourses([
    ...courseList.map(course => course.id),
  ]);

  const deselectAll = () => setSelectedCourses([]);

  const sortBy = field => getCourses({ sort: [`${field}=asc`] }, dispatch);

  const checkFunction = course => (
    () => (selectedCourses.includes(course.id)
      ? removeItem(course.id) : addToSelect(course.id))
  );

  const Row = ({ course }) => (
    <tr key={course.email}>
      <td className="sorting">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedCourses.includes(course.id)}
            name={`course_${course.id}`}
            onChange={checkFunction(course)}
          />
          <label className="form-check-label" htmlFor={`course_${course.id}`}>
            {course.id}
          </label>
        </div>
      </td>
      <td>{course.name}</td>
      <td>{course.creator}</td>
      <td>
        <ThreeDotsDropDownMenu>
          <button
            className="dropdown-item"
            type="button"
            onClick={
            () => showConfirmationModal(course)
          }
          >
            <i className="fas fa-times text-orange-red" />
            Delete
          </button>
          <button
            className="dropdown-item"
            onClick={() => goToUrl('edit', course.id)}
            type="button"
          >
            <i className="fas fa-cogs text-dark-pastel-green" />
            Edit
          </button>
          <button
            className="dropdown-item"
            onClick={() => goToUrl('show', course.id)}
            type="button"
          >
            <i className="fa fa-address-card text-orange" />

            Show
          </button>
        </ThreeDotsDropDownMenu>
      </td>
    </tr>
  );

  Row.propTypes = {
    course: PropTypes.shape({
      avatar: PropTypes.string,
      date_of_birth: PropTypes.string,
      email: PropTypes.string,
      gender: PropTypes.string,
      id: PropTypes.number,
      mobile_phone: PropTypes.string,
      name: PropTypes.string,
      no_control: PropTypes.string,
    }).isRequired,
  };

  return (
    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3>All Courses Data</h3>
          </div>
          <ThreeDotsDropDownMenu>
            <button
              className="dropdown-item"
              onClick={() => goToUrl('add')}
              type="button"
            >
              <i className="fas fa-cogs text-dark-pastel-green" />
              Add New
            </button>
            <button
              onClick={() => getCourses({}, dispatch)}
              className="dropdown-item"
              type="button"
            >
              <i
                className="fas fa-redo-alt text-orange-peel"
              />
              Refresh
            </button>
          </ThreeDotsDropDownMenu>
        </div>
        <form className="mg-b-20">
          <div className="row gutters-8">
            <div className="offset-7 col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <input
                type="text"
                placeholder="Search by Roll ..."
                className="form-control"
              />
            </div>
            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
              <button type="submit" className="fw-btn-fill btn-gradient-yellow">
                SEARCH
              </button>
            </div>
          </div>
        </form>
        <div className="table-responsive">
          <div className="dataTables_wrapper">
            <table className="table display data-table text-nowrap">
              <thead>
                <tr>
                  <th
                    className="sorting_asc"
                    onClick={() => sortBy('id')}
                  >
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="checkAll"
                        checked={selectedCourses.length === courseList.length}
                        className="form-check-input checkAll"
                        onChange={
                          selectedCourses.length === courseList.length
                            ? deselectAll : selectAll
                    }
                      />
                      <label className="form-check-label" htmlFor="checkAll">
                        id
                      </label>
                    </div>
                  </th>
                  <th className="sorting">Name</th>
                  <th className="sorting">Creator</th>
                  <th aria-label="Options" />
                </tr>
              </thead>
              <tbody>
                { courseList.map(
                  course => <Row key={course.id} course={course} />,
                )}
              </tbody>
            </table>

            <Paginate
              data={courseList}
              currentPage={pagination.current_page}
              totalPages={pagination.total_pages}
              hideFirstAndLastPageLinks
              isLoading={pagination.isLoading}
              showSpinner
              onPageChange={onPageChange}
            />

            <ModalConfirmation
              {...confirmationData}
              onAccept={onAcceptDelete(confirmationData.course)}
              onCancel={onCancelDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CourseList.propTypes = {
  courseList: PropTypes.shape({
    creator: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};
export default CourseList;

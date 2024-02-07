import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultUserImg from 'images/figure/student2.png';
import { getTeachers, deleteTeacher } from '../../constants/teachers/actions';
import { useStateProvider } from '../../store';
import ModalConfirmation from '../../components/modals/confirmation';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import { showAlert } from '../../constants/alerts/actions';
import Paginate from '../../components/Paginate';

const Row = ({ teacher, history, showConfirmationModal }) => (
  <tr key={teacher.email}>
    <td>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={`teacher_${teacher.id}`}
        />
        <label
          htmlFor={`teacher_${teacher.id}`}
          className="form-check-label"
        >
          {teacher.id}
        </label>
      </div>
    </td>
    <td className="text-center">
      <img src={teacher.avatar || defaultUserImg} alt="teacher" />
    </td>
    <td>{teacher.name}</td>
    <td>{teacher.gender}</td>
    <td>2</td>
    <td>A</td>
    <td>Jack Sparrow </td>
    <td>TA-107 Newyork</td>
    <td>{teacher.date_of_birth}</td>
    <td>{teacher.mobile_phone}</td>
    <td>{teacher.email}</td>
    <td>

      <ThreeDotsDropDownMenu>

        <button
          className="dropdown-item"
          type="button"
          onClick={
            () => showConfirmationModal(teacher)
          }
        >
          <i className="fas fa-times text-orange-red" />
            Delete
        </button>
        <button
          className="dropdown-item"
          onClick={() => history.push(`/app/teachers/${teacher.id}/edit`)}
          type="button"
        >
          <i className="fas fa-cogs text-dark-pastel-green" />
            Edit
        </button>
        <button
          className="dropdown-item"
          onClick={() => history.push(`/app/teachers/${teacher.id}`)}
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  showConfirmationModal: PropTypes.func.isRequired,
  teacher: PropTypes.shape({
    avatar: PropTypes.string,
    date_of_birth: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
    mobile_phone: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

const TeachertList = ({ history }) => {
  const appState = useStateProvider();
  const {
    dispatch, state: {
      teacher: { teacherList, ...pagination },
    },
  } = appState;


  const onPageChange = params => getTeachers(params, dispatch);

  useEffect(() => {
    getTeachers({}, dispatch);
  }, [teacherList.length]);

  const [confirmationData, setConfirmationData] = useState({
    show: false,
    message: undefined,
    teacher: undefined,
  });

  const onCancelDelete = () => setConfirmationData({
    show: false,
    message: undefined,
  });

  const showDeletingInProgressModal = () => setConfirmationData({
    ...confirmationData,
    loading: true,
  });

  const onAcceptDelete = teacher => () => {
    showDeletingInProgressModal();
    deleteTeacher(teacher.id, dispatch).then(() => {
      setConfirmationData({ show: false, message: undefined });
      dispatch(showAlert({
        alertType: 'success',
        message: 'The teacher has been deleted successfully',
      }));
    });
  };


  const showConfirmationModal = teacher => {
    setConfirmationData({
      show: true,
      message: `you are about to delete the user: ${teacher.name}, do you want to continue?`,
      teacher,
    });
  };

  return (
    <div className="card height-auto">
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3>All Teachers Data</h3>
          </div>
          <ThreeDotsDropDownMenu>
            <button
              className="dropdown-item"
              onClick={() => history.push('/app/teachers/new')}
              type="button"
            >
              <i className="fas fa-cogs text-dark-pastel-green" />
              Add New
            </button>
            <button
              onClick={() => getTeachers({}, dispatch)}
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
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <input
                type="text"
                placeholder="Search by Roll ..."
                className="form-control"
              />
            </div>
            <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
              <input
                type="text"
                placeholder="Search by Name ..."
                className="form-control"
              />
            </div>
            <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
              <input
                type="text"
                placeholder="Search by Class ..."
                className="form-control"
              />
            </div>
            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
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
          <div className="dataTables_wrapper">
            <table className="table display data-table text-nowrap">
              <thead>
                <tr>
                  <th className="sorting_asc">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="checkAll"
                        className="form-check-input checkAll"
                      />
                      <label className="form-check-label" htmlFor="checkAll">
                        id
                      </label>
                    </div>
                  </th>
                  <th className="sorting">Photo</th>
                  <th className="sorting">Name</th>
                  <th className="sorting">Gender</th>
                  <th className="sorting">Class</th>
                  <th className="sorting">Section</th>
                  <th className="sorting">Parents</th>
                  <th className="sorting">Address</th>
                  <th className="sorting">Date Of Birth</th>
                  <th className="sorting">Phone</th>
                  <th className="sorting">E-mail</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                { teacherList.map(teacher => (
                  <Row
                    key={teacher.id}
                    teacher={teacher}
                    history={history}
                    showConfirmationModal={showConfirmationModal}
                  />
                ))}
              </tbody>
            </table>


            <Paginate
              data={teacherList}
              currentPage={pagination.current_page}
              totalPages={pagination.total_pages}
              hideFirstAndLastPageLinks
              isLoading={pagination.isLoading}
              showSpinner
              onPageChange={onPageChange}
            />
            <ModalConfirmation
              {...confirmationData}
              onAccept={onAcceptDelete(confirmationData.teacher)}
              onCancel={onCancelDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TeachertList.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

export default TeachertList;

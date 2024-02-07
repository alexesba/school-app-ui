import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultUserImg from 'images/figure/student2.png';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import ModalConfirmation from '../../components/modals/confirmation';
import { showAlert } from '../../constants/alerts/actions';
import Paginate from '../../components/Paginate';
import { StudentsAtom } from '../../atoms/students';
import useStudentsActions from '../../actions/students';
import { useRecoilValue } from 'recoil';


const StudentList = ({ history }) => {
  const { students: studentList, pagination } = useRecoilValue(StudentsAtom)
  const { getStudents, deleteStudent } = useStudentsActions();

  const onPageChange = params => getStudents(params);

  useEffect(() => {
      getStudents({});
  }, []);

  const [selectedStudents, setSelectedStudents] = useState([]);

  const [confirmationData, setConfirmationData] = useState({
    show: false,
    message: undefined,
    student: undefined,
  });

  const showConfirmationModal = student => setConfirmationData({
    show: true,
    message: `
    You are about to delete the user permanently, do you want to continue?
    `,
    student,
  });

  const showDeletingInProgressModal = () => setConfirmationData({
    ...confirmationData,
    loading: true,
  });

  const onCancelDelete = () => setConfirmationData({
    show: false,
    message: undefined,
  });

  const onAcceptDelete = student => () => {
    showDeletingInProgressModal();
    deleteStudent(student.id, dispatch).then(user => {
      setConfirmationData({ show: false, message: undefined });
      dispatch(showAlert({
        alertType: 'success',
        message: 'The user has been deleted successfully',
      }));
    });
  };

  const addToSelect = id => setSelectedStudents([...selectedStudents, id]);
  const removeItem = id => setSelectedStudents(
    selectedStudents.filter(selectedId => selectedId !== id),
  );

  const selectAll = () => setSelectedStudents([
    ...studentList.map(student => student.id),
  ]);

  const deselectAll = () => setSelectedStudents([]);

  const sortBy = field => getStudents({ sort: [`${field}=asc`] }, dispatch);

  const checkFunction = student => (
    () => (selectedStudents.includes(student.id)
      ? removeItem(student.id) : addToSelect(student.id))
  );

  const Row = ({ student }) => (
    <tr key={student.email}>
      <td className="sorting">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedStudents.includes(student.id)}
            name={`student_${student.id}`}
            onChange={checkFunction(student)}
          />
          <label className="form-check-label" htmlFor={`student_${student.id}`}>
            {student.no_control}
          </label>
        </div>
      </td>
      <td className="text-center">
        <img src={student.avatar || defaultUserImg} alt="student" />
      </td>
      <td>{student.name}</td>
      <td>{student.gender}</td>
      <td>2</td>
      <td>A</td>
      <td>Jack Sparrow </td>
      <td>TA-107 Newyork</td>
      <td>{student.date_of_birth}</td>
      <td>{student.mobile_phone}</td>
      <td>{student.email}</td>
      <td>
        <ThreeDotsDropDownMenu>
          <button
            className="dropdown-item"
            type="button"
            onClick={
              () => showConfirmationModal(student)
            }
          >
            <i className="fas fa-times text-orange-red" />
            Delete
          </button>
          <button
            className="dropdown-item"
            onClick={() => history.push(`/app/students/${student.id}/edit`)}
            type="button"
          >
            <i className="fas fa-cogs text-dark-pastel-green" />
            Edit
          </button>
          <button
            className="dropdown-item"
            onClick={() => history.push(`/app/students/${student.id}`)}
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
    student: PropTypes.shape({
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
            <h3>All Students Data</h3>
          </div>
          <ThreeDotsDropDownMenu>
            <button
              className="dropdown-item"
              onClick={() => history.push('/app/students/new')}
              type="button"
            >
              <i className="fas fa-cogs text-dark-pastel-green" />
              Add New
            </button>
            <button
              onClick={() => getStudents({}, dispatch)}
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
                    onClick={() => sortBy('no_control')}
                  >
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="checkAll"
                        checked={selectedStudents.length === studentList.length}
                        className="form-check-input checkAll"
                        onChange={
                          selectedStudents.length === studentList.length
                            ? deselectAll : selectAll
                        }
                      />
                      <label className="form-check-label" htmlFor="checkAll">
                        No Control
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
                  <th aria-label="options" />
                </tr>
              </thead>
              <tbody>
                {studentList.map(
                  student => <Row key={student.id} student={student} />,
                )}
              </tbody>
            </table>

            <Paginate
              data={studentList}
              currentPage={pagination.current_page}
              totalPages={pagination.total_pages}
              hideFirstAndLastPageLinks
              isLoading={pagination.isLoading}
              showSpinner
              onPageChange={onPageChange}
            />

            <ModalConfirmation
              {...confirmationData}
              onAccept={onAcceptDelete(confirmationData.student)}
              onCancel={onCancelDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

StudentList.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
  student: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
export default StudentList;

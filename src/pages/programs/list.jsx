import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPrograms, deleteProgram } from '../../constants/programs/actions';
import { useStateProvider } from '../../store';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import ModalConfirmation from '../../components/modals/confirmation';
import { showAlert } from '../../constants/alerts/actions';
import urlHelper from '../../utils/url';
import * as programPaths from '../../constants/programs/paths';
import Paginate from '../../components/Paginate';


const ProgramList = ({ history }) => {
  const appState = useStateProvider();
  const {
    dispatch, state: {
      program: {
        programList, ...pagination
      },
    },
  } = appState;

  const goToUrl = urlHelper(programPaths, history);

  const onPageChange = params => getPrograms(params, dispatch);

  useEffect(() => {
    if (programList.length === 0) {
      getPrograms({}, dispatch);
    }
  }, [programList.length]);

  const [selectedPrograms, setSelectedPrograms] = useState([]);

  const [confirmationData, setConfirmationData] = useState({
    show: false,
    message: undefined,
    program: undefined,
  });

  const showConfirmationModal = program => setConfirmationData({
    show: true,
    message: `
    You are about to delete the program permanently, do you want to continue?
    `,
    program,
  });

  const showDeletingInProgressModal = () => setConfirmationData({
    ...confirmationData,
    loading: true,
  });

  const onCancelDelete = () => setConfirmationData({
    show: false,
    message: undefined,
  });

  const onAcceptDelete = program => () => {
    showDeletingInProgressModal();
    deleteProgram(program.id, dispatch).then(() => {
      setConfirmationData({ show: false, message: undefined });
      dispatch(showAlert({
        alertType: 'success',
        message: 'The user has been deleted successfully',
      }));
    });
  };

  const addToSelect = id => setSelectedPrograms([...selectedPrograms, id]);
  const removeItem = id => setSelectedPrograms(
    selectedPrograms.filter(selectedId => selectedId !== id),
  );

  const selectAll = () => setSelectedPrograms([
    ...programList.map(program => program.id),
  ]);

  const deselectAll = () => setSelectedPrograms([]);

  const sortBy = field => getPrograms({ sort: [`${field}=asc`] }, dispatch);

  const checkFunction = program => (
    () => (selectedPrograms.includes(program.id)
      ? removeItem(program.id) : addToSelect(program.id))
  );

  const Row = ({ program }) => (
    <tr key={program.email}>
      <td className="sorting">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedPrograms.includes(program.id)}
            name={`program_${program.id}`}
            onChange={checkFunction(program)}
          />
          <label className="form-check-label" htmlFor={`program_${program.id}`}>
            {program.id}
          </label>
        </div>
      </td>
      <td>{program.name}</td>
      <td>{program.creator}</td>
      <td>
        <ThreeDotsDropDownMenu>
          <button
            className="dropdown-item"
            type="button"
            onClick={
            () => showConfirmationModal(program)
          }
          >
            <i className="fas fa-times text-orange-red" />
            Delete
          </button>
          <button
            className="dropdown-item"
            onClick={() => goToUrl('edit', program.id)}
            type="button"
          >
            <i className="fas fa-cogs text-dark-pastel-green" />
            Edit
          </button>
          <button
            className="dropdown-item"
            onClick={() => goToUrl('show', program.id)}
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
    program: PropTypes.shape({
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
            <h3>All Programs Data</h3>
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
              onClick={() => getPrograms({}, dispatch)}
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
                        checked={selectedPrograms.length === programList.length}
                        className="form-check-input checkAll"
                        onChange={
                          selectedPrograms.length === programList.length
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
                { programList.map(
                  program => <Row key={program.id} program={program} />,
                )}
              </tbody>
            </table>

            <Paginate
              data={programList}
              currentPage={pagination.current_page}
              totalPages={pagination.total_pages}
              hideFirstAndLastPageLinks
              isLoading={pagination.isLoading}
              showSpinner
              onPageChange={onPageChange}
            />
            <ModalConfirmation
              {...confirmationData}
              onAccept={onAcceptDelete(confirmationData.program)}
              onCancel={onCancelDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProgramList.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};
export default ProgramList;

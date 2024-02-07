import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getLevelPrograms, deleteLevelProgram }
  from '../../constants/level_programs/actions';
import { useStateProvider } from '../../store';
import ThreeDotsDropDownMenu from '../../components/ThreeDotsDropDownMenu';
import ModalConfirmation from '../../components/modals/confirmation';
import { showAlert } from '../../constants/alerts/actions';
import urlHelper from '../../utils/url';
import * as levelProgramPaths from '../../constants/level_programs/paths';

import Paginate from '../../components/Paginate';

const ProgramList = ({ history }) => {
  const appState = useStateProvider();
  const {
    dispatch,
    state: { levelProgram: { levelProgramList, ...pagination } },
  } = appState;

  const goToUrl = urlHelper(levelProgramPaths, history);

  const onPageChange = params => getLevelPrograms(params, dispatch);

  useEffect(() => {
    if (levelProgramList.length === 0) {
      getLevelPrograms({}, dispatch);
    }
  }, [levelProgramList.length]);

  const [selectedLevelPrograms, setSelectedLevelPrograms] = useState([]);

  const [confirmationData, setConfirmationData] = useState({
    show: false,
    message: undefined,
    levelProgram: undefined,
  });

  const showConfirmationModal = levelProgram => setConfirmationData({
    show: true,
    message: `
    You are about to delete the program level permanently,
    do you want to continue?
    `,
    levelProgram,
  });

  const showDeletingInProgressModal = () => setConfirmationData({
    ...confirmationData,
    loading: true,
  });

  const onCancelDelete = () => setConfirmationData({
    show: false,
    message: undefined,
  });

  const onAcceptDelete = levelProgram => () => {
    showDeletingInProgressModal();
    deleteLevelProgram(levelProgram.id, dispatch).then(() => {
      setConfirmationData({ show: false, message: undefined });
      dispatch(showAlert({
        alertType: 'success',
        message: 'The user has been deleted successfully',
      }));
    });
  };

  const addToSelect = id => setSelectedLevelPrograms([
    ...setSelectedLevelPrograms,
    id,
  ]);

  const removeItem = id => setSelectedLevelPrograms(
    setSelectedLevelPrograms.filter(selectedId => selectedId !== id),
  );

  const selectAll = () => setSelectedLevelPrograms([
    ...levelProgramList.map(levelProgram => levelProgram.id),
  ]);

  const deselectAll = () => setSelectedLevelPrograms([]);

  const sortBy = field => getLevelPrograms(
    { sort: [`${field}=asc`] },
    dispatch,
  );

  const checkFunction = levelProgram => (
    () => (selectedLevelPrograms.includes(levelProgram.id)
      ? removeItem(levelProgram.id) : addToSelect(levelProgram.id))
  );

  const Row = ({ levelProgram }) => (
    <tr key={levelProgram.id}>
      <td className="sorting">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedLevelPrograms.includes(levelProgram.id)}
            name={`program_level_${levelProgram.id}`}
            onChange={checkFunction(levelProgram)}
          />
          <label
            className="form-check-label"
            htmlFor={`program_level_${levelProgram.id}`}
          >
            {levelProgram.id}
          </label>
        </div>
      </td>
      <td>{levelProgram.program_name}</td>
      <td>{levelProgram.level_name}</td>
      <td>{levelProgram.organization_name}</td>
      <td>
        <ThreeDotsDropDownMenu>
          <button
            className="dropdown-item"
            type="button"
            onClick={
            () => showConfirmationModal(levelProgram)
          }
          >
            <i className="fas fa-times text-orange-red" />
            Delete
          </button>
          <button
            className="dropdown-item"
            onClick={() => goToUrl('edit', levelProgram.id)}
            type="button"
          >
            <i className="fas fa-cogs text-dark-pastel-green" />
            Edit
          </button>
          <button
            className="dropdown-item"
            onClick={() => goToUrl('show', levelProgram.id)}
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
    levelProgram: PropTypes.shape({
      id: PropTypes.number,
      level_name: PropTypes.string,
      program_name: PropTypes.string,
    }).isRequired,
  };

  const allSelected = (
    selectedLevelPrograms.length === levelProgramList.length
  );

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
              onClick={() => getLevelPrograms({}, dispatch)}
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
            <div
              className="col-5-xxxl col-xl-5 col-lg-5 col-5 form-group"
            >
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
                        checked={allSelected}
                        className="form-check-input checkAll"
                        onChange={allSelected ? deselectAll : selectAll}
                      />
                      <label className="form-check-label" htmlFor="checkAll">
                        id
                      </label>
                    </div>
                  </th>
                  <th className="sorting">Program</th>
                  <th className="sorting">Level</th>
                  <th className="sorting">Organization</th>
                  <th aria-label="Options" />
                </tr>
              </thead>
              <tbody>
                { levelProgramList.map(
                  levelProgram => (
                    <Row key={levelProgram.id} levelProgram={levelProgram} />
                  ),
                )}
              </tbody>
            </table>
            <Paginate
              data={levelProgramList}
              currentPage={pagination.current_page}
              totalPages={pagination.total_pages}
              hideFirstAndLastPageLinks
              isLoading={pagination.isLoading}
              showSpinner
              onPageChange={onPageChange}
            />

            <ModalConfirmation
              {...confirmationData}
              onAccept={onAcceptDelete(confirmationData.levelProgram)}
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

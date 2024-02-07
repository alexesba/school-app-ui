import React from 'react';
import PropTypes from 'prop-types';

const DashboardContentOne = ({ children }) => (
  <div className="dashboard-content-one">
    { children }
  </div>
);

DashboardContentOne.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(DashboardContentOne);
